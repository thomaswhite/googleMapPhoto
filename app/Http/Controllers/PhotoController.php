<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Location;
use App\Model\Photo;
use Storage;
use Image;

class PhotoController extends Controller
{
    private function responseData($success,$message){
        if($success){
            $data['success'] = true;
            return response()->json($data);
        }
        $data['success'] = false;
        $data['errorMessage'] = $message;
        return response()->json($data);
    }

    public function listPhoto(Request $request){
        $mark = Location::find($request->id);
        if($mark){
            if(count($mark->photos) != 0){
                foreach($mark->photos as $key=>$photo){
                    $data[$key]['id'] = $photo->id;
                    $data[$key]['path'] = $photo->path;
                }
                return response()->json($data);
            }
            return $this->responseData(false,'no photos');
        }
        
        return $this->responseData(false,'the mark not exist');
    }

    public function uploadPhoto(Request $request){
        $location_id = $request->id;
        $mark = Location::find($location_id);

        // if location not exit return false
        if(!$mark){
            return $this->responseData(false,'the mark not exist');
        }

        if($request->hasFile('photo')){
            $s3 = Storage::disk('s3');

            // compress photo
            $photo_file_name = $request->file('photo')->getFilename();
            $photo = Image::make($request->file('photo'));
            $photo->resize(500, null, function ($constraint) {
                $constraint->aspectRatio();
            });
            $photo->encode('jpeg',99);

            // put photo to s3 and return data
            if($s3->put('photo/'.$photo_file_name.'.jpeg',(string)$photo)){
                $photo_url = $s3->url('photo/'.$photo_file_name.'.jpeg');
                $photo_id = Photo::create(['path' => $photo_url]);
                $mark->photos()->save($photo_id);

                $data['success'] = true;
                $data['url'] = $photo_url;
                $data['id'] = $photo_id->id;

                return response()->json($data);
            }
        }

        return $this->responseData(false,'no file');
    }

    public function deletePhoto(Request $request){
        $location_id = $request->location_id;
        $photo_id = $request->photo_id;

        $mark = Location::find($location_id);
        $photo = Photo::find($photo_id);

        // get path and delete s3 file
        if($photo){
            $photo_path = $photo->path;
            $photo_name = explode("/",$photo_path);

            // delete s3 file
            Storage::disk('s3')->delete('photo/'.end($photo_name));
            $photo->delete();
            $mark->photos()->detach($photo_id);
            return $this->responseData(true,'');
        }
        
        return $this->responseData(false,'data not found');
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Location;
use App\Model\Photo;
use Storage;

class MarkController extends Controller
{
    public function listMark(Request $request){
        $mark = Location::all();
        foreach($mark as $key=>$value){
            $data[$key]['id'] = $value->id;
            $data[$key]['lat'] = $value->lat;
            $data[$key]['lng'] = $value->lng;
        }
        return response()->json($data);
    }

    public function addMark(Request $request){
        $coordinate = $request->all();

        $location_data = Location::create($coordinate);
        if($location_data){
            $data['success'] = true;
            $data['id'] = $location_data->id;
            return response()->json($data);
        }
        
        $data['success'] = false;
        return response()->json($data);
    }

    public function deleteMark(Request $request){
        $id = $request->id;
        $mark = Location::find($id);

        if($mark){
            if($mark->photos){
                foreach($mark->photos as $photos){
                    $photo = Photo::find($photos->id);
                    if($photo){
                        $photo_path = $photo->path;
                        $photo_name = explode("/",$photo_path);

                        // delete s3 file
                        Storage::disk('s3')->delete('photo/'.end($photo_name));
                        $photo->delete();
                        $mark->photos()->detach($photos->id);
                    }
                }
                $mark->delete();
                $data['success'] = true;
                return response()->json($data);
            }
        }
        
        $data['success'] = false;
        return response()->json($data);
    }

    public function updateMark(Request $request){
        $input = $request->all();

        $mark = Location::find($input['id']);

        if($mark){
            $success = $mark->update([
                                'lat' => $input['lat'],
                                'lng' => $input['lng']
                             ]);
            if($success){
                return "success";
            }
        }
    }
}

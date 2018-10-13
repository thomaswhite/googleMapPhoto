<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Location;

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
        return Location::create($coordinate);
    }

    public function deleteMark(Request $request){
        $id = $request->id;
        $mark = Location::find($id);

        if($mark){
            $mark->delete();
        }
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

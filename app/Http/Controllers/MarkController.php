<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Location;

class MarkController extends Controller
{
    public function addMark(Request $request){
        $coordinate = $request->all();
        return Location::create($coordinate);
    }
}

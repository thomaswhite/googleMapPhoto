<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prifex'=>'api'],function(){
    Route::get('/mark/list', 'MarkController@listMark');
    Route::post('/mark/add', 'MarkController@addMark');
    Route::post('/mark/delete', 'MarkController@deleteMark');
    Route::post('/mark/update', 'MarkController@updateMark');

    Route::post('/photo/list', 'PhotoController@listPhoto');
    Route::post('/photo/upload', 'PhotoController@uploadPhoto');
    Route::post('/photo/delete', 'PhotoController@deletePhoto');
});

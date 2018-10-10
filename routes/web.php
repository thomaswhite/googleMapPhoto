<?php
use App\Model\User;
use App\Model\Location;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/insert',function(){
    DB::table('location_photo')->insert(
        ['location_id'=>'2','photo_id'=>'3']
    );
});

Route::get('/read',function(){
    $user = User::all();
    foreach($user as $user){
        return $user->email;
    }
});

Route::get('/find',function(){
    $location = Location::find(1)->photo()->get();
    return $location;
});

<?php

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
    DB::table('users')->insert(
        ['email'=>'aaa1233@gamil.com','password'=>'1111']
    );
});

Route::get('/read',function(){
    $query = DB::table('users')
                    ->where('id',1)
                    ->get();
    print_r($query);
});

Route::get('/update',function(){
    DB::table('users')
            ->where('id', 1)
            ->update(['password' => '1112222']);
});

Route::get('/delete',function(){
    DB::table('users')
            ->where('id',3)
            ->delete();
});

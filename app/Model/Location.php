<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table = 'location';
    protected $fillable = [
        'lat','lng'
    ];

    public function photos(){
        return $this->belongsToMany('App\Model\Photo');
    }
}

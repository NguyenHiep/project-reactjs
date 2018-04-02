<?php

namespace App\Http\Controllers\Manage;

use App\Http\Controllers\BaseManageController;
use Illuminate\Http\Request;

class HomeController extends BaseManageController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('manage.home.index');
    }
}

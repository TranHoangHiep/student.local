<?php

class Admin extends MX_Controller {

    public function __construct(){
        parent::__construct();
    }
    
    public function login(){
        $this->load->view('login');
    }
}
<?php

class Admin extends MX_Controller {

    public function __construct(){
        parent::__construct();
    }
    
    public function template(){
        $this->load->view('header');
        $this->load->view('login');
    }
}
<?php

declare(strict_types=1);

namespace App\Controllers;

use Symfony\Component\HttpFoundation\Response;

class SiteController
{
    public function index() {
        ob_start();
        require PAGE_DIR . DS . 'home.php';
        $response = new Response( ob_get_clean(), 200, );
    }
}

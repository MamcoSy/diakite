<?php

declare ( strict_types = 1 );

namespace App\Controllers;

use App\Core\AbstractController;

class SiteController extends AbstractController
{
    /**
     * @return mixed
     */
    public function index()
    {
        return $this->render( 'home' );
    }
}

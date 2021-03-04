<?php

use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

$routeCollection = new RouteCollection();

$routeCollection->add( 'home', new Route( '/', ['_controller' => 'App\Controllers\SiteController::index'] ) );

return $routeCollection;

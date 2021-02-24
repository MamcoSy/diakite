<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\Router;

require_once '../vendor/autoload.php';

define( 'DS', DIRECTORY_SEPARATOR );
define( 'PAGE_DIR', dirname( __DIR__ ) . DS . 'src' . DS . 'pages' );

$request        = Request::createFromGlobals();
$uri            = $request->getPathInfo();
$defaultHeaders = ['Content-Type' => 'text/html; charset=utf-8'];

$requestContext = new RequestContext();
$requestContext->fromRequest($request);

$routeCollection = new RouteCollection();
$routeCollection->add('home', new Route('/', [
    '_controller' => 'App\Controllers\SiteController'
]));

$urlMatcher = new UrlMatcher($routeCollection, $requestContext);

try {
    $matches = $urlMatcher->match($request->getPathInfo());
} catch (ResourceNotFoundException $e) {
    $response = new Response( '<h1>Page not found</h1>', 404, $defaultHeaders );
} catch (Exception $e) {
    $response = new Response( '<h1>Oups une erreur est survenu sur le server</h1>', 500, $defaultHeaders );
}

if ( isset( $map[$uri] ) ) {
    ob_start();
    require $map[$uri];
    $response = new Response( ob_get_clean(), 200, );
} else {
    
}

$response->send();

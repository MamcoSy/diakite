<?php

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\HttpKernel\Controller\ArgumentResolver;
use Symfony\Component\HttpKernel\Controller\ControllerResolver;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;

require_once '../vendor/autoload.php';

define( 'DS', DIRECTORY_SEPARATOR );
define( 'SRC_DIR', dirname( __DIR__ ) . DS . 'src' );

$request        = Request::createFromGlobals();
$uri            = $request->getPathInfo();
$defaultHeaders = ['Content-Type' => 'text/html; charset=utf-8'];

$controllerResolver = new ControllerResolver();
$argumentResolver   = new ArgumentResolver();

$requestContext = new RequestContext();
$requestContext->fromRequest( $request );

$routeCollection = require SRC_DIR . DS . 'routes.php';

$urlMatcher = new UrlMatcher( $routeCollection, $requestContext );

try {
    $request->attributes->add( $urlMatcher->match( $request->getPathInfo() ) );
    $controller = $controllerResolver->getController( $request );
    $arguments = $argumentResolver->getArguments( $request, $controller );
    $response = call_user_func_array($controller, $arguments);
} catch ( ResourceNotFoundException $e ) {
    $response = new Response( '<h1>Page not found</h1>', 404, $defaultHeaders );
} catch ( Exception $e ) {
    $message  = $e->getMessage();
    $response = new Response( "<h1>Oups une erreur est survenu sur le server: ERROR:{$message}</h1>", 500, $defaultHeaders );
}

$response->send();

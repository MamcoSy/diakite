<?php

declare ( strict_types = 1 );

namespace App\Core;

use Symfony\Component\HttpFoundation\Response;

abstract class AbstractController
{
    /**
     * @param string $view
     */
    public function render( string $view )
    {
        ob_start();
        require SRC_DIR . DS . 'views' . DS . $view . '.php';
        $pageContent = ob_get_clean();
        ob_start();
        require SRC_DIR . DS . 'views' . DS . 'layouts' . DS . 'mainLayout.php';

        return new Response( ob_get_clean(), 200, );
    }
}

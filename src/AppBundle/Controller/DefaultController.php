<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use AppBundle\Classes\Session;
use AppBundle\Classes\Ajax;

class DefaultController extends Controller {
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction() {
		$template_data = [
			'page_title' => 'ClickRPG',
		];

        return $this->render('index.html.twig', $template_data);
    }
}

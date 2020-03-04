<?php 

namespace App\Controller;

use App\Entity\Invoice;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;

class InvoiceIncrementationController {

    /**
     * @var ObjectManager
     */
    private $manager;
    
    public function __construct(ManagerRegistry $manager)
    {
        $this->manager = $manager;
    }
    /**
     * @Route("/api/invoices/{id}/increment")
     * 
     * @param Invoice $data
     * @return void
     */
    public function __invoke(Invoice $data)
    {
        $data->setChrono($data->getChrono() + 1);

        $this->manager->flush();

        return $data;

    }
}
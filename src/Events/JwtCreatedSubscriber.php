<?php

namespace App\Events;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JwtCreatedSubscriber {

    public function updateJwtData(JWTCreatedEvent $event) {
         //recuperer l'utilisateur (pour voir son firstname et lastname)
         $user = $event->getUser();

         // enrichir les data pour qu'elles contiennet ces données
         $data = $event->getData();
         $data['firstName'] = $user->getFirstName();
         $data['lastName'] = $user->getLastName();

         $event->setData($data);

    }
}

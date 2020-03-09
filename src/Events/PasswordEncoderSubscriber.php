<?php

namespace App\Events;

use App\Entity\User;
use Symfony\Component\HttpKernel\KernelEvents;
use ApiPlatform\Core\EventListener\EventPriorities;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;

class PasswordEncoderSubscriber implements EventSubscriberInterface {

    /** @var UserPasswordEncoderInterface  */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['encodePassword', EventPriorities::PRE_WRITE]
        ];
    }

    public function encodePassword(GetResponseForControllerResultEvent $event)// a chaque requete en post cette fonction va etre appeller pour deserialiser
     {
        $user = $event->getControllerResult();
        $method = $event->getRequest()->getMethod(); // POST , GET , PUT , ...

        if($user instanceof User && $method === "POST") {
            $hash = $this->encoder->encodePassword($user, $user->getPassword());
            $user->setPassword($hash);
        }
    }

}

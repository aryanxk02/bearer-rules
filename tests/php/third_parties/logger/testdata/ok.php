<?php

$user = array('email' => 'user@email.com', 'uuid' => 'unique-identifier');
$log->info('Adding a new user', $user->uuid());
$log->info('Adding a new user', $user->uuid);
$log->info('Adding a new user', $user["uuid"]);

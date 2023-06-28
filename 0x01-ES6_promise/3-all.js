#!/usr/bin/env node

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto, createUser])
    .then(([photo, user]) => console.log(`${photo.body} ${user.firstName} ${user.lastName}`));
}

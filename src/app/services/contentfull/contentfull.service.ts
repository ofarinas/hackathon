import { Injectable } from '@angular/core';
import { createClient } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfullService {
  client;
  constructor() {
    this.client = createClient({
      space: 'p96qx3o6ve7g',
      accessToken:
        '91ad92892718e647cb88b7357a7f0c47309a520773d434ac82e1faaea60d4044',
      host: 'preview.contentful.com'
    });

    this.client
      .getContentTypes()
      .then(entry => console.log(entry))
      .catch(err => console.log(err));
  }
}

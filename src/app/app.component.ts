import { ContentfullService } from './services/contentfull/contentfull.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'retire-easy';

  constructor(private cf: ContentfullService) {}
}

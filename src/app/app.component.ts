import {ContentfullService} from './services/contentfull/contentfull.service';
import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material';
import {TwoFaceService} from './services/two-face.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'retire-easy';

    constructor(private cf: ContentfullService, private twoFaceService: TwoFaceService) {
    }

    onLinkClick(event: MatTabChangeEvent) {
        if (event.index === 3) {
            const element = document.getElementById('tabAnalyseNotification');
            element.parentNode.removeChild(element);
        }
    }

    ngOnInit(): void {
        this.twoFaceService.login();
    }

}

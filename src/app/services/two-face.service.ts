import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {appState} from '../model/AppState';

@Injectable({
    providedIn: 'root'
})
export class TwoFaceService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    constructor(private http: HttpClient) {
    }

    login() {
        this.http.post(environment.baseUrl, {}, this.httpOptions).subscribe(element => appState.account = element);
    }
}

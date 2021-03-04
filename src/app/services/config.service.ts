import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class ConfigService {

    constructor() {
        console.log('ConfigService called');
    }

    public getApiEndPoint() {
        return 'https://google.com';
    }
}

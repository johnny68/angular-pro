import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class GetBillsService {
    private url = 'https://royalfitnessclub.in/user/get/billing';

    constructor(private http: Http) { }

    public getSpecific(user_id) {
        return this.http.get(this.url + '?user_id=' + user_id);
    }
}

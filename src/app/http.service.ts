import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HTTP {
    constructor(private http: Http) {}

    public get(): void {
        this.http
            .get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(() => {});
    }

    public get1(): void {
        this.http
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .subscribe(() => {});
    }

    public post(): void {
        this.http
            .post('https://jsonplaceholder.typicode.com/posts', {
                data: 'cool!'
            })
            .subscribe(() => {});
    }
}

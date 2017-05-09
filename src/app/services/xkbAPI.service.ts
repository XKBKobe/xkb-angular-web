/**
 * Created by asto on 2017/5/8.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams, Response} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class xkbAPIService {
  constructor(public http:Http){

  }

  post(params){
    return new Promise((resolve, reject)=> {
      let url = 'http://localhost:3000/login';
      const body = new URLSearchParams();
      Object.keys(params).forEach(key => {
        body.set(key, params[key]);
      });

      let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
      let options = new RequestOptions({headers: headers}); // Create a request option
      this.http.post(url, body, options).map((res: Response) => res.json()).subscribe(res => {
        console.log(res);
        resolve(res);
      }, err => {
        console.log(err);
        reject(err);
      });

    })
  }
}

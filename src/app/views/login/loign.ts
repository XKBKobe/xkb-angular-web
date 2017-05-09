/**
 * Created by asto on 2017/5/8.
 */
import {Component} from '@angular/core';
import {xkbAPIService} from '../../services/xkbAPI.service'

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  constructor(public service: xkbAPIService) {

  }

  //登录
  login() {
    let params = {
      user: 'kobe',
      password: '123'
    };
    this.service.post(params).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
}

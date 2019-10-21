import { Component, OnInit } from '@angular/core';
import { CaptchaService } from '../captcha.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private captcha: CaptchaService) { }
  public code = this.captcha.GenerateCode();
  public NewCode() {
  this.code = this.captcha.GenerateCode();
}
}

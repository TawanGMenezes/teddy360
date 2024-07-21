import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

  returnUrl: string = '';
  show: boolean = false;
  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    manterconectado: new FormControl(false),
  });
  constructor(private router: Router, private cookieService : CookieService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnUrl)
  }

  checkKeepConected() : boolean{
    return this.loginForm.get('manterconectado')?.value
  }

  login() {
    if (this.loginForm.valid) {
      !this.checkKeepConected() ? localStorage.setItem('login', this.loginForm.get('login')?.value) :
      this.cookieService.set('login', this.loginForm.get('login')?.value);
      this.router.navigate(['home']);
      // this.router.navigate([this.returnUrl]);
    }
  }


}

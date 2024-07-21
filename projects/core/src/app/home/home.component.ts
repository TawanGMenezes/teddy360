import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario!: string
  constructor(private router : Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.usuario = this.cookieService.get('login') || localStorage.getItem('login') || '';
  }

  logout(){
    localStorage.removeItem('login');
    this.cookieService.delete('login');
    this.router.navigate(['/login']);
  }
}

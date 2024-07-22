import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService, private activatedRoute: ActivatedRoute) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let savedUrl = state.url.split('?')[0];
      let params = state.url.split('?')[1];
      if (savedUrl !== '/home'){
        localStorage.setItem('savedUrl', savedUrl);
      }
      if (params){
        localStorage.setItem('params', params);
      }
      if (!localStorage.getItem('login') && !this.cookieService.get('login')){
        this.router.navigate(['login']);
        return false;
      }
      return true;
   }

}

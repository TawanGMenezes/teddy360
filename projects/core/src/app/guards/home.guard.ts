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

      if (!localStorage.getItem('login') && !this.cookieService.get('login')){
        console.log('usr not logged')
        this.router.navigate(['login']);
        // this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
      }


      console.log('usr logged')
      return true;
  }

}

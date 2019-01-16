import { Injectable } from '@angular/core';
import { Router, CanActivate,RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class UnAuthService implements CanActivate {
  
    constructor(private router: Router,
                private authService: AuthService) { }
  
    canActivate(router, state: RouterStateSnapshot) {
      
      if (!this.authService.isLoggedIn()) {
        return true;
      }
  
      this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
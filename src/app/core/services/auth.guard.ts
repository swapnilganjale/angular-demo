import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,private jwtService:JwtService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.jwtService.getToken()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { User } from '../../../users/shared/user.model';
import {JwtService } from '../../services/jwt.service'

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
  [x: string]: any;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private jwtService:JwtService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        var obj = {};
        obj['username'] =this.f.email.value;
        obj['password'] =  this.f.password.value;
        obj['grant_type'] = "password";

         this.loading = true;
         this.authService.login(obj).subscribe(
            data => {
               if( data !== undefined ){
                 console.log("token == "+ data["access_token"]);
                 this.jwtService.saveToken(data["access_token"])
                 console.log(this.returnUrl);
                 this.router.navigate([this.returnUrl]);
            }else{
                 this.router.navigate(["/login"]);
              }
            },
            error => {
                  this.loading = false;
                 this.router.navigate(['login']);
            });

    }
}

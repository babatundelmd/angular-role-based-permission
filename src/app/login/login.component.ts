import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ActionSequence } from 'protractor';
import { Login } from 'app/models/login.model';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  loginData: FormGroup;
  public input: Login

  constructor (
    private builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private permissions: NgxPermissionsService
  ) { }

  ngOnInit () {

    this.resetForm();
  }

  resetForm () {
    this.loginData = this.builder.group({
      user: new FormControl('', [ Validators.required ]),
      password: new FormControl('', [ Validators.required ]),
      roles: new FormControl('', [ Validators.required ])
    })
  }


  onSubmit (input: Login) {
    const perms = [ 'cityAdmin', 'regAdmin', 'superAdmin' ];
    this.permissions.loadPermissions(perms);
    localStorage.setItem('Login-Token', JSON.stringify(input.roles))
    console.log(input.roles)
    this.router.navigate([ '/dashboard' ], { queryParams: { user: input.roles } })
  }
}

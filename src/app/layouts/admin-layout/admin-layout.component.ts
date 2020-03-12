import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: [ './admin-layout.component.scss' ]
})
export class AdminLayoutComponent implements OnInit {
  session;
  tokenize;
  getRoles;

  constructor (private permissions: NgxPermissionsService, private route: ActivatedRoute) { }

  ngOnInit (): void {
    this.session = localStorage.getItem('Login-Token')
    this.tokenize = JSON.parse(this.session)
    this.getRoles = this.route.snapshot.paramMap.get('input.roles');
    console.log(this.getRoles)
  }
}

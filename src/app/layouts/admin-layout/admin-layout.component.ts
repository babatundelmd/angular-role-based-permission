import { Component, OnInit } from '@angular/core';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: [ './admin-layout.component.scss' ]
})
export class AdminLayoutComponent implements OnInit {
  public roleuser;
  getRoles;

  constructor (private permissions: NgxPermissionsService, private route: ActivatedRoute, private roles: NgxRolesService) { }

  ngOnInit (): void {
    this.roles.addRole('cityAdmin', () => {
      return true
    })

    this.roles.addRole('regAdmin', () => {
      return true
    })
    this.roles.addRole('superAdmin', () => {
      if (this.roleuser === 'superAdmin') {
        return true
      }

    })
  }
}

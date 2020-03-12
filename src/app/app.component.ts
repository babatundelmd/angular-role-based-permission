import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {

  constructor (private permissionsService: NgxPermissionsService) { }

  ngOnInit (): void {
    const perm = [ "ADMIN", "EDITOR" ];
    this.permissionsService.loadPermissions(perm);
  }

}
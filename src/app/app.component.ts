import { Component } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {

  constructor (private permissions: NgxPermissionsService, private route: ActivatedRoute) { }

  ngOnInit (): void {
  }

}
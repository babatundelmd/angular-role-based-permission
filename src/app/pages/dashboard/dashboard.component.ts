import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { NgxPermissionsService } from 'ngx-permissions';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    constructor (private permissionsService: NgxPermissionsService) { }

    ngOnInit () {
        const perm = [ "ADMIN", "EDITOR" ];
        this.permissionsService.loadPermissions(perm);

    }

}
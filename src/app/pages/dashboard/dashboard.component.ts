import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { NgxPermissionsService } from 'ngx-permissions';


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    isSuper: boolean;

    constructor (private permissionsService: NgxPermissionsService) { }

    ngOnInit () {
        const getRole = localStorage.getItem('role');
        if (getRole === 'superAdmin') {
            this.isSuper = true;
        }

    }

}
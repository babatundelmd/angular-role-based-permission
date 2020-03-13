import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login.model';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    shouldRender (roles: string): boolean;
}

export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: 'nc-bank',
        class: '',
        shouldRender: (roles: string) => true
    },
    {
        path: '/icons',
        title: 'All Regions',
        icon: 'nc-diamond',
        class: '',
        shouldRender: (roles: string) => {
            return roles.includes('superAdmin');
        }
    },
    {
        path: '/table',
        title: 'Lagos',
        icon: 'nc-tile-56',
        class: '',
        shouldRender: (roles: string) => true
    },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: RouteInfo[];
    public roleUser;
    user: Login;
    ngOnInit () {
        this.roleUser = localStorage.getItem('role')
        this.menuItems = ROUTES.filter(menuItem => {
            if (menuItem && menuItem.shouldRender(this.user || this.roleUser)) {
                return true
            }
        }
        );
        console.log(this.roleUser)
    }
}

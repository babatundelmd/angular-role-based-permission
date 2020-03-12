import { Component, OnInit } from '@angular/core';
import { Login } from 'app/models/login.model';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    shouldRender (roles: string[]): boolean;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '', shouldRender: (roles: []) => true },
    {
        path: '/icons',
        title: 'Icons',
        icon: 'nc-diamond',
        class: '',
        shouldRender: (roles) => {
            return roles.includes('superAdmin');
        }
    },
    // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table', title: 'Table List', icon: 'nc-tile-56', class: '', shouldRender: (roles: []) => true },
    // { path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
    // { path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: RouteInfo[];
    user: Login;
    ngOnInit () {
        this.menuItems = ROUTES.filter(menuItem =>
            menuItem &&
            menuItem.shouldRender(
                (this.user || { roles: [] }).roles
            ));

        return this.menuItems
    }
}

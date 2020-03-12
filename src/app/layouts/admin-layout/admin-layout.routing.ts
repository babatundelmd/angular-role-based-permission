import { Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { NgxPermissionsGuard } from 'ngx-permissions';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'dashboard/:user',
        component: DashboardComponent
        // canActivate: [ NgxPermissionsGuard ],
        // data: {
        //     permissions: {
        //         only: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        //             if (route.params[ 'user' ] === 'admin') {
        //                 return [ 'ADMIN', 'CITYADMIN' ]
        //             } else {
        //                 return 'SUPERADMIN'
        //             }
        //         }
        //     }
        // }
    },
    // 'cityAdmin', 'regAdmin', 'superAdmin'
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'typography', component: TypographyComponent },
    {
        path: 'icons',
        component: IconsComponent,
        canActivate: [ NgxPermissionsGuard ],
        data: {
            permissions: {
                only: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
                    if (route.params[ 'input.roles' ] === 'superAdmin') {
                        return true
                    }
                }
            }
        }
    },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent }
];

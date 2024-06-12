import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserMenuComponent } from './components/user/user-menu/user-menu.component';
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'user',
        component: UserMenuComponent,
        title: 'User'
    },
    {
        path: 'admin/users',
        component: AdminRegisterComponent,
        title: 'Admin Register'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    }
];
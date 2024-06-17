import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppointmentComponent } from './components/patient/appointment/appointment.component';
import { AllAppointmentsComponent } from './components/assistant/all-appointments/all-appointments.component';
import { UserManagementComponent } from './components/admin/user-management/user-management.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path: 'appointment',
        component: AppointmentComponent,
        title: 'Appointment'
    },
    {
        path: 'all-appointments',
        component: AllAppointmentsComponent,
        title: 'All Appointments'
    },
    {
        path: 'admin-roles',
        component: UserManagementComponent,
        title: 'Admin'
    }
];
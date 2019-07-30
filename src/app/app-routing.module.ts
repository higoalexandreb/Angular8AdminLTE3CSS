import { LoginComponent } from './components/login/login.component';
import { AppURL } from './app.url';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const RouteLists: Routes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full' },
    // { path: 'home', component: WorkWithUsComponent },
    // { path: 'ourcompany', component: OurCompanyComponent },
    // { path: 'map', component: MapComponent },
    // { path: 'job', component: WorkWithUsDetailComponent }

    // {path: AppURL.Login, component: LoginComponent }

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo: '/login' }

];

// เผื่อรันไม่ติด
// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })


export const AppRouting = RouterModule.forRoot(RouteLists);

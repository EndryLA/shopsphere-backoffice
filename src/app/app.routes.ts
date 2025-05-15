import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './guards/auth.guard';
import { AdminTestPageComponent } from './pages/admin-test-page/admin-test-page.component';

export const routes: Routes = [
    {path:'login',component:LoginPageComponent},
    {path:'admin',component:AdminTestPageComponent, canActivate:[authGuard]}
];

import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './guards/auth.guard';
import { AdminTestPageComponent } from './pages/admin-test-page/admin-test-page.component';
import {ProductListPageComponent} from "./pages/products/product-list-page/product-list-page.component";
import {adminGuard} from "./guards/admin.guard";

export const routes: Routes = [
    {path:'login',component:LoginPageComponent},
    {path:'admin',component:AdminTestPageComponent, canActivate:[authGuard]},
    {path:'produits/liste', component:ProductListPageComponent, canActivate:[authGuard, adminGuard]},
];

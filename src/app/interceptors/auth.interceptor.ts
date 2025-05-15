import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";
import { Router } from "@angular/router";


export function authInterceptor(request:HttpRequest<unknown>, next:HttpHandlerFn) {


    const token = localStorage.getItem('authToken')
    const authService:AuthService = inject(AuthService)
    const router = inject(Router)

    if (token === null) {
        return next(request);  
    }

    if (authService.isTokenExpired()) {
        localStorage.removeItem("authToken")
        router.navigate(['login'])
    }

    const newRequest = request.clone({
        headers: request.headers.append('Authorization',`Bearer ${token}`)
    })

    return next(newRequest)
    
}
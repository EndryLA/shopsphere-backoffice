import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";


export function authInterceptor(request:HttpRequest<unknown>, next:HttpHandlerFn) {


    const token = localStorage.getItem('authToken')
    const authService = inject(AuthService)
    const router = inject(Router)

    if (token === null) {
        return next(request);  
    }

    if (authService.isTokenExpired()) {
        router.navigateByUrl('login')
        return next(request)
    }

    const newRequest = request.clone({
        headers: request.headers.append('Authorization',`Bearer ${token}`)
    })

    return next(newRequest)
    
}
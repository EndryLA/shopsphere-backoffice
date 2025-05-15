import { HttpHandlerFn, HttpRequest } from "@angular/common/http";


export function authInterceptor(request:HttpRequest<unknown>, next:HttpHandlerFn) {


    const token = localStorage.getItem('authToken')

    if (token === null) {
        return next(request);  
    }

    const newRequest = request.clone({
        headers: request.headers.append('Authorization',`Bearer ${token}`)
    })

    return next(newRequest)
    
}
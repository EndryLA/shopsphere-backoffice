import { HttpHandlerFn, HttpRequest } from "@angular/common/http";


export function AuthInterceptor(request:HttpRequest<unknown>, next:HttpHandlerFn) {


    const token = localStorage.getItem('authToken')

    if (token === null) {
        next(request);  
    }

    const newRequest = request.clone({
        headers: request.headers.append('Authorization',`Bearer ${token}`)
    })

    next(newRequest);
    

}
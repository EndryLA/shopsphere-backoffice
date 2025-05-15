import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { jwtDecode } from "jwt-decode";
import { Router } from "@angular/router";


@Injectable({providedIn:'root'})
export class AuthService {


    private apiUrl= environment.apiUrl;
    private http:HttpClient = inject(HttpClient);
    private router:Router = inject(Router)

    login(email:string, password:string){
        this.http.post<string>(`${this.apiUrl}/auth/login`,{email,password}).subscribe({
            next:(response:any) => {
                localStorage.setItem('authToken',response.token)
                this.router.navigateByUrl('')
            }, 
            error:(error) => {
                console.log(error)
            }
        })
    }

    getToken() {
        return localStorage.getItem('authToken')
    }

    isTokenExpired() {

        const token = this.getToken()

        if (token != null) {
            
            const expirationDate = jwtDecode<any>(token).exp * 1000
            const currentTime = Date.now()

            return expirationDate < currentTime
        }

        return true;
    }

    isAuthenticated() {

        const token = this.getToken()

        return (token && !this.isTokenExpired())

    }

    getRole() {

        const token = this.getToken();

        if (token != null ) {
            const decodedToken = jwtDecode<any>(token)

            return decodedToken.authorities

        } else {
            return null;
        }

    }

}
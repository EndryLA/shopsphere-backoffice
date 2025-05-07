import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { jwtDecode } from "jwt-decode";


@Injectable({providedIn:'root'})
export class AuthService {


    private apiUrl= environment.apiUrl;
    private http:HttpClient = inject(HttpClient);

    login(email:string, password:string){
        this.http.post<string>(`${this.apiUrl}/auth/login`,{email,password}).subscribe({
            next:(response:any) => {
                localStorage.setItem('authToken',response.token)
            }, 
            error:(error) => {
                console.log(error)
            }
        })
    }

    getToken() {
        return localStorage.getItem('authToken')
    }

    getRole() {

        const token = this.getToken();

        if (token != null ) {
            const decodedToken = jwtDecode<any>(token)

            return decodedToken.role;

        } else {
            return null;
        }

    }

}
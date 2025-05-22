import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"
import { Router } from "@angular/router"


export const  authGuard = () => {

  console.warn("Auth guard called")

    const authService = inject(AuthService)
    const router = inject(Router)

    if (authService.getToken() === null || authService.isTokenExpired()) {
        router.navigateByUrl('login')
        return false
    }

    return true
}

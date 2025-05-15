import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"


export const adminGuard = () => {

    const authService = inject(AuthService)
    
    const authorities = authService.getRole();

    return (authorities.includes('ROLE_ADMIN'))
     
}
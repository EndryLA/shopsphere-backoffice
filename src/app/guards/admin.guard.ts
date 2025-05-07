import { inject } from "@angular/core"
import { AuthService } from "../services/auth.service"


export const adminGuard = () => {

    const authService = inject(AuthService)
    
    if (authService.getRole() !== 'ROLE_ADMIN') {
        return false;
    }

    return true;

}
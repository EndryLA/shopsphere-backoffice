import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit{

  private http = inject(HttpClient)
  private router = inject(Router)
  private authSevice = inject(AuthService)
  private formBuilder = inject(FormBuilder)
  public loginForm!:FormGroup;


  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:[null,[Validators.required,Validators.email]],
        password:[null,[Validators.required]]
      })
  }

  login() {

    console.log('hello')

    if (this.loginForm.valid) {
      
      const username = this.loginForm.value.email
      const password = this.loginForm.value.password

      this.authSevice.login(username,password)

    }
  }


}

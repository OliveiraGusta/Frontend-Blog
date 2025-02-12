import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;


  constructor(
    private router: Router,
    private authService: AuthService,
    private toastService: ToastrService,
  
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });

  }

  submit(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.loginSuccess(),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  loginSuccess() {
    this.toastService.success("Login feito com sucesso!");
    this.router.navigate(['/home']);
  }
  
  navigate() {
    this.router.navigate(['/signup']);
  }


}

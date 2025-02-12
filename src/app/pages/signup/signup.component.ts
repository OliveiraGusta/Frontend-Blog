import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { ToastrService } from 'ngx-toastr';

interface SignupForm {
  name: FormControl,
  email: FormControl,
  photo: FormControl,
  password: FormControl,
  passwordConfirm: FormControl
}

@Component({
  selector: 'app-signup',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [ServiceService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup<SignupForm>;


  constructor(
    private router: Router,
    private SignupService: ServiceService,
    private toastService: ToastrService,
  
  ){
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      photo: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });

  }

  submit(){
   /* this.SignupService.singup(
   this.signupForm.value.email,
   this.signupForm.value.password,
   this.signupForm.value.name,
   this.signupForm.value.photo
   ).subscribe({
      next: () => this.toastService.success("Cadastro feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    })*/
   
   console.log(
    this.signupForm.value.email,
    this.signupForm.value.password,
    this.signupForm.value.name,
    this.signupForm.value.photo
    )
  }

  navigate() {
    this.router.navigate(['/login']);
  }

}

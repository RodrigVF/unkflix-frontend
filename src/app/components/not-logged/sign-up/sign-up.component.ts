import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.successMessage = '';

      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.registerForm.reset();
          localStorage.removeItem('token');
          this.isLoading = false;
          this.successMessage = 'Conta criada com sucesso! <br> Redirecionando para a página de login...';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2500);
        },
        error: (error: HttpErrorResponse) => {
          this.isLoading = false;
          if (error.status === 400) {
            this.errorMessage = error.error || 'Dados inválidos.';
          } else {
            this.errorMessage = 'Ocorreu um erro ao tentar criar sua conta. Tente novamente mais tarde.';
          }
        }
      });
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup
  

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ){
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      const {email, password} = this.loginForm.value
      this.authService.login(email, password).subscribe(() => {
        this.router.navigateByUrl('/home')
      },
      error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Credenciales incorrectas",
          footer: 'valida tus credenciales'
        });
      }
    )
    }
  } 
}

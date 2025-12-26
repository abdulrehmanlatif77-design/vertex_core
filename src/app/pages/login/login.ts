import { Component, inject } from '@angular/core';
import { LoginModel } from '../../models/vertex.model';
import { FormsModule } from '@angular/forms';
import { Student } from '../../services/student/student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: LoginModel = new LoginModel('', '');
  router = inject(Router); 
  studentService = inject(Student); 
  onLogin() {
    this.studentService.onLogin(this.loginObj).subscribe({
      next: (res: any) => {
       if (res?.isSuccess === true)
       {
        alert('Login Successful');
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['/student']);
       }
       else
       {
        alert('Login Failed');  
       }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

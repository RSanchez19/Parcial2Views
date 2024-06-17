import { Component, OnInit} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  user = {

    username: '',

    email: '',

    password: ''

  };

  returnUrl: String;
  registrationStatus: String;

  constructor(private http: HttpClient, private router: Router) {
    this.registrationStatus = '';
    this.returnUrl = '';
  }

  private isValidInput(): boolean {
    return !!(
      this.user.username.trim() &&
      this.user.email.trim() &&
      this.user.password.trim()
    );
  }

  ngOnInit(): void {
  }

  registerUser(): void {
    if (!this.isValidInput()) {
      this.registrationStatus = 'Please fill in all fields';
      return;
    }

    this.http.post('http://localhost:8080/auth/patientRegister', this.user)
     .subscribe(
        (response: any) => {
          console.log(response, 'user registered succesfully');
          this.registrationStatus = 'You have registered succesfully!';
          this.router.navigate([this.returnUrl='/']);
        },
        (error: any) => {
          console.error(error, 'user already exists');
          this.registrationStatus = 'User already exists, try again';
          this.router.navigate([this.returnUrl='/register'])
        }
      );
  }
}

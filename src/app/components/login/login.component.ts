import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  loginResponse: string;
 
  constructor(private http: HttpClient){
    this.username = '';
    this.password = '';
    this.loginResponse = '';
  }

  ngOnInit(): void {
      
  }

  onSUbmit(): void {
    this.http.post('http://localhost:8080/auth/login',{username: this.username, password: this.password})
    .subscribe((response: any) => {
      console.log(response, 'login succesful');
    }, (error: any) => {
    console.error(error, 'login failed');
    this.loginResponse = 'Incorrect username or password, try again'
  });
  }
}

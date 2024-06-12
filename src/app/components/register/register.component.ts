import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  user = {

    username: '',

    email: '',

    password: ''

  };


  constructor(private http: HttpClient) { }


  ngOnInit(): void {

  }


  registerUser(): void {

    this.http.post('http://localhost:8080/admin/users/register', this.user)

      .subscribe(response => {

        console.log(response);

      }, error => {

        console.error(error);

      });

  }

}

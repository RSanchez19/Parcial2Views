import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appointment = {
    reason: '',
    date: ''
  }

  constructor(private http: HttpClient){
  }
  
  // metodo para mandar los datos del appointment
  

}

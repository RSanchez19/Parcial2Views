import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppointmentCardComponent } from '../appointment-card/appointment-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-appointments',
  standalone: true,
  imports: [AppointmentCardComponent, CommonModule],
  templateUrl: './all-appointments.component.html',
  styleUrl: './all-appointments.component.css'
})
export class AllAppointmentsComponent implements OnInit {
  appointments: any[];

  constructor(private http: HttpClient){
    this.appointments = []
  }

  ngOnInit(): void {
      this.http.get('http://localhost:8080/')  // cambiar por ruta para obtener todos los appointments
      .subscribe((response: any) => {
        this.appointments = response;
      });
  }
}

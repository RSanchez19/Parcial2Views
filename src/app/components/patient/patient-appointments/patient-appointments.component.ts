import { Component } from '@angular/core';
import { AppointmentCardComponent } from '../../assistant/appointment-card/appointment-card.component';

@Component({
  selector: 'app-patient-appointments',
  standalone: true,
  imports: [AppointmentCardComponent],
  templateUrl: './patient-appointments.component.html',
  styleUrl: './patient-appointments.component.css'
})
export class PatientAppointmentsComponent {

}

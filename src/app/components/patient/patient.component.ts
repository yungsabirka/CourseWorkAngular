import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../services/patient.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.css'
})
export class PatientComponent implements OnInit{
  constructor(public patientService: PatientService){
  }
  ngOnInit() {
    this.patientService.refreshList();
  }
}

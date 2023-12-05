import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {NgForm} from "@angular/forms"
import {Patient} from "../../models/patient.model";
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent{
  constructor(public patientService: PatientService,
              private toastr: ToastrService){}

  onClick(){
    console.log("dfsfksjfs");
  }
  onSubmit(form: NgForm, event: Event) {
    event.preventDefault();
    console.log("54353453")
    // this.patientService.postPatient()
    //   .subscribe({
    //     next: result => {
    //       this.patientService.list = result as Patient[];
    //       // this.patientService.resetForm(form);
    //       this.toastr.success('Inserted successfully', 'Patient Detail Register')
    //       console.log(result);
    //     },
    //     error: err => { console.log(err); }
    //   })
  }
}

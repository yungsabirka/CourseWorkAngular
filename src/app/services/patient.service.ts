import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Patient} from "../models/patient.model";
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private url: string = environment.apiBaseUrl + '/Patient';
  list: Patient[] = [];
  formData: Patient = new Patient();
  constructor(private http:HttpClient) {
  }

  refreshList(){
    this.http.get(this.url)
      .subscribe({
        next: res => {
          this.list = res as Patient[];
        },
        error: err => {console.log(err)}
      })
  }

  postPatient(){
    console.log(this.formData);
    return this.http.post(this.url, this.formData);
  }

  resetForm(form: NgForm){
    form.form.reset();
    this.formData = new Patient();
  }
}

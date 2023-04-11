import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!:FormGroup;

  constructor(
    private fb:FormBuilder,
    private router:Router) {
  }

  ngOnInit(): void {
    this.createForm();

  }
  createForm(){
    this.form = this.fb.group({
      fullName :[null],
      email :[null],
      position :[null],
      password :[null],
      gender :[null],
    })
  }

  submit(){
    Swal.fire({icon: 'success', title: 'Your data has been saved'});
  }

  encrypt(){
    return CryptoJS.AES.encrypt( JSON.stringify(this.form.value) , environment.secretKey).toString();
  }

  decrypt(stringToDecrypt:string){
    let resault = CryptoJS.AES.decrypt( stringToDecrypt , environment.secretKey).toString(CryptoJS.enc.Utf8);
    return JSON.parse(resault)
  }
}

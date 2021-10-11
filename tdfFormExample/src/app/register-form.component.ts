import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdf',
  templateUrl: './register-form.component.html',
  styles: [
  ]
})
export class RegisterFormComponent implements OnInit {

  constructor() { }  

  ngOnInit(): void {
  }
  formData(data:any){
    console.log("hello");
    console.log(data);

  }

}

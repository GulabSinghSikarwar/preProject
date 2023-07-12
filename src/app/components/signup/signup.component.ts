import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signupForm !: FormGroup;




    ngOnInit(): void {
      this.signupForm = new FormGroup(
      {
        'email': new FormControl(null),
        'password': new FormControl(null),


      }
    )

  }
   onSubmitForm(){
    
    console.log(this.signupForm);
    
   }



}

import { Component, OnInit,NgModule } from '@angular/core';
import { StateService } from './state.service';
import { Router } from '@angular/router';
import { DistrictService } from './district.service';
import { RegService } from './reg.service';
import { State } from './state'
import {BrowserModule} from '@angular/platform-browser'
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Reg } from './reg';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [StateService,DistrictService,RegService]
})
export class RegisterComponent implements OnInit {

  resMsg: string

  states: any[];

  

  constructor(
    private state: StateService, 
    private router : Router,
    private http : HttpClient,
    private Register : RegService
  ) {
    this.http.get('http://localhost:3000/state')
    .subscribe(data => {
       this.states =data
    });
  }

  ngOnInit() {
    
  }
  onRegister(name:string,email:string,state:string,password:string){
    let reg= new Reg()
    reg.name=name
    reg.email=email
    reg.state=state
    reg.password=password

    this.Register.performOperation(reg, result=>{
      //console.log(result)
      if(result.sts==200){
        this.resMsg="Record Save Successfully";
      }
    });
  }

}

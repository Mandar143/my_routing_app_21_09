import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LgnService } from './lgn.service';
import { Calc } from './calc';

@Component({
  selector: 'app-lgn',
  templateUrl: './lgn.component.html',
  styleUrls: ['./lgn.component.css'],
  providers: [LgnService]
})
export class LgnComponent implements OnInit {
  
  resMsg: string
  constructor(
    private calc: LgnService, 
    private router : Router
    
  ) { }

  ngOnInit() {
  }
  onLogin(email: string, pwd: string) {
    let clc = new Calc()
    clc.email = email
    clc.pwd = pwd
    
    this.calc.performOperation(clc, result => {
      console.log(result)
      //this.resMsg = `logged in successfully`;
      if(result.username===email){
        this.router.navigate(['dash'])
      }
    });
    
    
  }
}

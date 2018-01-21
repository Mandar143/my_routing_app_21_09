import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashNm : String
  constructor(
    private router : Router,
    private actRt : ActivatedRoute
  ) { }

  ngOnInit() {
    this.dashNm=this.actRt.snapshot.params['usNm']
    this.actRt.params.subscribe(prms => {
      console.log(prms)
      this.dashNm=prms['usNm']
    })
  }

  go(nm : string){
  
    this.router.navigate(['dash',nm])
  }

}

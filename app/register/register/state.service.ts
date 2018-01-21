import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { State } from './state'

@Injectable()
export class StateService {

  constructor(
    private http: HttpClient
  ) { 
   
  }



  performOperation(clc: State, onResult: (res) => void) {
    
    this.http.post(
      'http://localhost:3000/state',
      clc, {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).subscribe(
      (response: Response) => onResult(response),
      err => onResult(err),
    );
  }
}



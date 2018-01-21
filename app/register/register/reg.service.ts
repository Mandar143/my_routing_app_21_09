import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reg } from './reg';

@Injectable()
export class RegService {

  constructor(
    private http: HttpClient
  ) { }
  performOperation(clc: Reg, onResult: (res) => void) {
    
    this.http.post(
      'http://localhost:3000/register',
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

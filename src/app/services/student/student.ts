import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Student {
  constructor(private http: HttpClient) {
  }
  onLogin(obj : any) {
    return this.http.post('https://localhost:7239/api/v1/Auth/login', obj);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Student {
  private baseUrl = 'https://localhost:7239/api/v1/Student';

  constructor(private http: HttpClient) {
  }
  onLogin(obj : any) {
    return this.http.post('https://localhost:7239/api/v1/Auth/login', obj);
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token') ?? '';
    const headersConfig: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
    }

    return new HttpHeaders(headersConfig);
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getstudents`, {
      headers: this.getAuthHeaders(),
    });
  }

  getStudentById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getstudent/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }

  createStudent(student: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createstudent`, student, {
      headers: this.getAuthHeaders(),
    });
  }

  updateStudent(id: string, student: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updatestudent/${id}`, student, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletestudent/${id}`, {
      headers: this.getAuthHeaders(),
    });
  }
}

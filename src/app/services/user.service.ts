import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.get('http://localhost:8000/api/users', {
      headers: headers,
    });
  }
}

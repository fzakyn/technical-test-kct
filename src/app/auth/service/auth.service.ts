import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const loginAccess = 'https://bstm.co.id/mobile-backend/api/auth';
const registerAccess = 'https://bstm.co.id/mobile-backedn/api/register';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username, password) {
    return this.http.post<any>(loginAccess, {username, password}).subscribe(
      response => {
        if(response){
          localStorage.setItem('currentUser', JSON.stringify(response));
        } else {
          alert('Authentication Failed');
        }
      }
    )
  }

}
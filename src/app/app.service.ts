import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AppService{

  authenticated = false;

  constructor(private http: HttpClient) {
  }
  getCurrentUser(){
    this.http.get('https://lmndev.herokuapp.com/api/user/me', {withCredentials: true}).subscribe(response => {
      return(response);
    });
  }
  isAuthenticate(){
    this.http.get('https://lmndev.herokuapp.com/api/user/me', {withCredentials: true} ).subscribe(response => {
      if(response != null) {
        if (response['name']) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      }
    });
    return this.authenticated;
  }
  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('https://lmndev.herokuapp.com/api/user/me', {headers: headers, withCredentials: true} ).subscribe(response => {

      if(response != null) {
        if (response['name']) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      }else {
        this.authenticated = false;
      }
      return callback && callback();
    });

  }

}

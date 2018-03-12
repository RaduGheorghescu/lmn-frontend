import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NavbarHttpServiceService {

  httpService: HttpClient;
  constructor(httpService: HttpClient) {
    this.httpService = httpService;
  }

  changeLanguage(language:String): Observable<any>{
    if(language == "ro"){
      return this.httpService.get("http://localhost:8081/api/language?lang=ro", {withCredentials: true});
    }else{
      return this.httpService.get("http://localhost:8081/api/language?lang=en", {withCredentials: true});
    }
  }


  getCurrentLanguage(): Observable<any>{
    return this.httpService.get("http://localhost:8081/api/language", {withCredentials: true});
  }

}

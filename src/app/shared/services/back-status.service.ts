import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BackStatusService {
  private http:HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
  getBackendServerStatus():boolean{
    let status:boolean = true;
    // this.http.get("http://localhost:8081/health").subscribe(data =>{
    //   console.log(data);
    //   if(data.status == "UP"){
    //     status = true;
    //   }else{
    //     status = false;
    //   }
    // });
    return status;
  }
}

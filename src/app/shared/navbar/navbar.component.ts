import {Component, OnInit} from '@angular/core';
import {NavbarHttpServiceService} from "./navbar-http-service.service";
import {Router} from "@angular/router";
import {AppService} from "../../app.service";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/finally';
import {BackStatusService} from "../services/back-status.service";
import {SiteComponentsService} from "../services/site-components.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private currentLanguage: String;
  private siteComponents;

  constructor(private navbarService: NavbarHttpServiceService, private router: Router, private appService: AppService, private http: HttpClient, private backService:BackStatusService, private siteComponentsService:SiteComponentsService) {
    this.siteComponents = siteComponentsService.siteCompoents;
  }

  navbarStyle() {
    // let style={
    //   'bopacity' : this.router.url == '/' ? '0.5' : '1'
    // };
    let style = {};
    return style;
  }

  changeLanguage() {
    if (this.currentLanguage == "en") {
      this.navbarService.changeLanguage("ro").subscribe(data => {
        this.currentLanguage = data.locale;
      });
      this.navbarService.getCurrentLanguage().subscribe(data => {
        console.log("Api language: " + data.locale);
      });
      console.log("Controler " + this.currentLanguage);
    } else {
      this.navbarService.changeLanguage("en").subscribe(data => {
        this.currentLanguage = data.locale;
      });
      this.navbarService.getCurrentLanguage().subscribe(data => {
        console.log("Api language: " + data.locale);
      });
      console.log("Controler " + this.currentLanguage);
    }
    this.navbarService.getCurrentLanguage();
    location.reload();
  }

  authenticated() {
    return this.appService.authenticated;
  }

  logout() {
    this.http.post('http://localhost:8081/logout', {}, {withCredentials: true}).finally(() => {
      this.appService.authenticated = false;
      this.router.navigateByUrl('/login');
    }).subscribe();
  }

  ngOnInit() {
    this.siteComponentsService.getSiteComponents();
    if(!this.backService.getBackendServerStatus()){
      this.router.navigateByUrl("/maintenance")
    }
    this.navbarService.getCurrentLanguage().subscribe(data => {
      console.log(data.locale);
      this.currentLanguage = data.locale;
    });
    this.appService.isAuthenticate();
  }

}

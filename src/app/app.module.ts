import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {
  HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHandler, HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {NavbarHttpServiceService} from "./shared/navbar/navbar-http-service.service";
import { NewsComponent } from './components/news/news.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import { FooterComponent } from './shared/footer/footer.component';
import { PeopleComponent } from './components/people/people.component';
import { HistoryComponent } from './components/history/history.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResearchComponent } from './components/research/research.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ContactComponent } from './components/contact/contact.component';
import { LinksComponent } from './components/links/links.component';
import {HistoryService} from "./components/history/history.service";
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import {AppService} from "./app.service";
import {BackStatusService} from "./shared/services/back-status.service";
import {SiteComponentsService} from "./shared/services/site-components.service";

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NewsComponent,
    PageNotFoundComponent,
    FooterComponent,
    PeopleComponent,
    HistoryComponent,
    ProjectsComponent,
    ResearchComponent,
    PublicationsComponent,
    ResourcesComponent,
    ContactComponent,
    LinksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    HistoryService,
    NavbarHttpServiceService,
    BackStatusService,
    SiteComponentsService,
    AppService,
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {NewsComponent} from "./components/news/news.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {PeopleComponent} from "./components/people/people.component";
import {HistoryComponent} from "./components/history/history.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ResearchComponent} from "./components/research/research.component";
import {PublicationsComponent} from "./components/publications/publications.component";
import {ResourcesComponent} from "./components/resources/resources.component";
import {ContactComponent} from "./components/contact/contact.component";
import {LinksComponent} from "./components/links/links.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'research',
    component: ResearchComponent
  },
  {
    path: 'publications',
    component: PublicationsComponent
  },  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}

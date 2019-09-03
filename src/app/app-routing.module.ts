import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InvestigationsComponent } from './investigations/investigations.component';
import { NewsComponent } from './news/news.component';
import { ProfessorsComponent } from './professors/professors.component';
import { SpecialProjectsComponent } from './special-projects/special-projects.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home/news', component: NewsComponent },
  { path: 'home/investigations', component: InvestigationsComponent },
  { path: 'home/investigations/professors', component: ProfessorsComponent },
  { path: 'home/special-projects', component: SpecialProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

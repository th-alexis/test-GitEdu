import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProfessorsComponent } from './professors/professors.component';
import { InvestigationsComponent } from './investigations/investigations.component';
import { SpecialProjectsComponent } from './special-projects/special-projects.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    ProfessorsComponent,
    InvestigationsComponent,
    SpecialProjectsComponent,
    AboutComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

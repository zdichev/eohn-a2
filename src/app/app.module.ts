import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './common/data-service/data.service';
import { HomeComponent } from './pages/home/home.component';
import { PeopleComponent } from './pages/people/people.component';
import { AboutComponent } from './pages/about/about.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    AboutComponent,
    PageHeaderComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

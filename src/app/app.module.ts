import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MeanComponent } from './mean/mean.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { QueryComponent } from './query/query.component';
import { ForumsComponent } from './forums/forums.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventsComponent,
    SidebarComponent,
    MeanComponent,
    ProjectListComponent,
    ProjectComponent,
    QueryComponent,
    ForumsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

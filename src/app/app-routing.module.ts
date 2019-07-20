import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { MeanComponent } from './mean/mean.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './project/project.component';
import { QueryComponent } from './query/query.component';
import { ForumsComponent } from './forums/forums.component';
import { ResumeComponent } from './resume/resume.component';
const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'events',component:EventsComponent},
  {path:'mean',component:MeanComponent},
  {path: 'project-list', component:ProjectListComponent},
  {path: 'project', component:ProjectComponent},
  {path:'query' , component:QueryComponent},
  {path: 'forums', component:ForumsComponent},
  {path: 'resume', component:ResumeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

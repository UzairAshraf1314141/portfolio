import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  { path: '', component: FirstScreenComponent },
  { path: 'projects', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}

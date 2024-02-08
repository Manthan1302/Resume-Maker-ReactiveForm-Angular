import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ResumeDesignOneComponent } from './resume-design-one/resume-design-one.component';
import { ResumeDesignTwoComponent } from './resume-design-two/resume-design-two.component';

const routes: Routes = [
  {path:'',component:ResumeFormComponent},
  {path:'design1',component:ResumeDesignOneComponent},
  {path:'design2',component:ResumeDesignTwoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

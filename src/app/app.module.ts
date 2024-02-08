import { ResumeService } from './services/ResumeData.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeFormComponent } from './resume-form/resume-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeDesignOneComponent } from './resume-design-one/resume-design-one.component';
import { ResumeDesignTwoComponent } from './resume-design-two/resume-design-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeFormComponent,
    ResumeDesignOneComponent,
    ResumeDesignTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

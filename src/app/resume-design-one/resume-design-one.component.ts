import { Component } from '@angular/core';
import { ResumeService } from '../services/ResumeData.service';
import { ResumeDetails } from '../model/resumeDetail.model';

@Component({
  selector: 'app-resume-design-one',
  templateUrl: './resume-design-one.component.html',
  styleUrls: ['./resume-design-one.component.css'],
})
export class ResumeDesignOneComponent {
  data!: ResumeDetails;
  constructor(private resumeService: ResumeService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data = this.resumeService.data;
  }
}

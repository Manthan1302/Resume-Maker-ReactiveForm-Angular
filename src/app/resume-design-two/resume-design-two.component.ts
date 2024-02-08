import { Component } from '@angular/core';
import { ResumeDetails } from '../model/resumeDetail.model';
import { ResumeService } from '../services/ResumeData.service';

@Component({
  selector: 'app-resume-design-two',
  templateUrl: './resume-design-two.component.html',
  styleUrls: ['./resume-design-two.component.css']
})
export class ResumeDesignTwoComponent {
  data!: ResumeDetails;
  constructor(private resumeService: ResumeService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data = this.resumeService.data;
  }
}

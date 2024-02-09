import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResumeDetails } from '../model/resumeDetail.model';
import { ResumeService } from '../services/ResumeData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css'],
})
export class ResumeFormComponent {
  genders = ['Male', 'Female'];
  countries = ['India', 'America', 'Japan', 'Nepal'];
  isSubmitted=false;
  ResumeForm!: FormGroup;
  url!: string;

  constructor(private resumeService: ResumeService, private router: Router) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ResumeForm = new FormGroup({
      BasicInfo: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        email: new FormControl(null, Validators.required),
        dob: new FormControl(null, Validators.required),
        mNo: new FormControl(null, Validators.required),
        summary: new FormControl(null, Validators.required),
        linkedinProfile: new FormControl(null, Validators.required),

        // img: new FormControl('./assets/banner1.png', Validators.required),
      }),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        city: new FormControl(null, Validators.required),
        zipCode: new FormControl(null, Validators.required),
        state: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([]),
      experiences: new FormArray([]),
      education: new FormArray([]),
    });
  }

  addSkillsControl() {
    console.log(this.ResumeForm.get('skills'));
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.ResumeForm.get('skills')).push(control);
  }

  deleteSkillControl(index: number) {
    const control = <FormArray>this.ResumeForm.get('skills');
    control.removeAt(index);
  }

  returnInputSkills(): any {
    return (<FormArray>this.ResumeForm.get('skills')).controls;
  }

  addExperienceControlGroup() {
    const experienceGroup = new FormGroup({
      companyName: new FormControl(null, Validators.required),
      position: new FormControl(null, Validators.required),
      experience: new FormControl(null, Validators.required),
      startDate: new FormControl(null, Validators.required),
      endDate: new FormControl(null, Validators.required),
    });

    (<FormArray>this.ResumeForm.get('experiences')).push(experienceGroup);
  }

  returnExperienceControl() {
    return (<FormArray>this.ResumeForm.get('experiences')).controls;
  }

  deleteExperienceGroup(index: number) {
    const control = <FormArray>this.ResumeForm.get('experiences');
    control.removeAt(index);
  }

  addEducationalControlGroup() {
    const educationGroup = new FormGroup({
      school: new FormControl(null, Validators.required),
      course: new FormControl(null, Validators.required),
      percentage: new FormControl(null, Validators.required),
      passingYear: new FormControl(null, Validators.required),
    });
    (<FormArray>this.ResumeForm.get('education')).push(educationGroup);
  }

  returnEducationalControls() {
    return (<FormArray>this.ResumeForm.get('education')).controls;
  }

  deleteEducationControl(index: number) {
    const control = <FormArray>this.ResumeForm.get('education');
    control.removeAt(index);
  }

  AddResumeData() {
    console.log(this.ResumeForm);
    // this.url='./assets/banner1.png'
    this.isSubmitted=true
    this.resumeService.data = this.ResumeForm.value;
    console.log(this.resumeService.data);
    // this.router.navigate(['/design2']);
  }

  setData() {
    this.ResumeForm.setValue({
      BasicInfo: {
        firstName: 'Manthan',
        lastName: 'Thakkar',
        email: 'Manthan@gmail.com',
        dob: '2002-07-13',
        mNo: 6352896341,
        summary:
          'Experienced web developer with expertise in HTML, CSS, JavaScript, and various web frameworks. Strong problem-solving skills and a passion for creating dynamic and user-friendly web applications.',
        linkedinProfile: 'Manthan1302',
      },
      address: {
        street: 'isanpur',
        country: 'India',
        city: 'Ahmadabad',
        state: 'Gujarat',
        zipCode: '123456',
      },
      skills: ['c++', 'java'],
      education: [
        {
          school: 'spsv',
          course: 'HSC',
          percentage: 45,
          passingYear: '2002-07-13',
        },
        {
          school: 'spsv',
          course: 'SSC',
          percentage: 65,
          passingYear: '2002-07-13',
        },
      ],
      experiences: [
        {
          companyName: 'abc',
          position: 'Software Developer',
          experience: 2,
          startDate: '2002-07-13',
          endDate: '2002-07-13',
        },
      ],
    });
  }
}

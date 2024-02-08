export class BasicInfo {
  firstName: string | null = null;
  lastName: string | null = null;
  email: string | null = null;
  dob: Date | null = null;
  mNo: number | null = null;
  // img:string|null=null;
  summary: string | null = null;
  linkedinProfile: string | null = null;
}

export class Address {
  street: string | null = null;
  country: string | null = null;
  city: string | null = null;
  zipCode: number | null = null;
  state: string | null = null;
}

export class experiences {
  companyName: string | null = null;
  position: string | null = null;
  experience: number | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;
}

export class education {
  school: string | null = null;
  course: string | null = null;
  percentage: number | null = null;
  passingYear: Date | null = null;
}
export class ResumeDetails {
  BasicInfo: BasicInfo | null = null;
  address: Address | null = null;
  skills: string[] | null = null;
  experiences: experiences[] | null = null;
  education: education[] | null = null;
}

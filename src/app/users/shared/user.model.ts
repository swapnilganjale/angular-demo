export class User {

  public id: string;
  public email: string;
  public password: string;
  public fullName: string;
  public mobile: string;
  public dob :Date;
  public gender:string

  constructor(id: string, email: string,password :string, fullName: string, mobile: string, dob: Date,gender :string ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.mobile = mobile;
    this.dob = dob;
    this.gender = gender;
  }

}

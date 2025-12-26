export class LoginModel
{
    email: string;
    password: string;

    constructor(email: string, password: string)
    {
        this.email = '';
        this.password = '';
    }
}

export class StudentModel
{
    id: string;
    emailAddress: string;
    firstName: string;
    lastName: string;
    middleInitial: string;
    dateOfBirth: Date;
    gender: string;
    address: string;
    phoneNumber: string;
    enrollmentDate: Date;
    degree:number;
    gpa: number;

    constructor(id: string, emailAddress: string, firstName: string, lastName: string, middleInitial: string, dateOfBirth: Date, gender: string, address: string, phoneNumber: string, enrollmentDate: Date, degree: number, gpa: number)
    {
        this.id = id;
        this.emailAddress = emailAddress;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.enrollmentDate = enrollmentDate;
        this.degree = degree;
        this.gpa = gpa;
    }
}
import { Component } from '@angular/core';
import { Student as StudentService } from '../../services/student/student';
import { StudentModel } from '../../models/vertex.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  constructor(private studentService: StudentService) {}

  students: StudentModel[] = [];  

  ngOnInit() {
    this.loadStudents();
  } 
  loadStudents() {
    this.studentService.getStudents().subscribe({
      next: (res: any) => {
        this.students = res.data;
      },
      error: (err:any) => {
        console.log(err);
      },
    });
  }
}

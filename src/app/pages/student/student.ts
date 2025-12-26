import { Component } from '@angular/core';
import { Student as StudentService } from '../../services/student/student';
import { StudentModel } from '../../models/vertex.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [FormsModule, CommonModule],
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
        const data = Array.isArray(res)
          ? res
          : (res?.data ?? res?.result ?? res?.students ?? []);
        this.students = data as StudentModel[];
      },
      error: (err: any) => {
        console.log(err);
        this.students = [];
      },
    });
  }
}

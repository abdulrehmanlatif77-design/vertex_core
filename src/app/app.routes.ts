import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Student } from './pages/student/student';
import { Course } from './pages/course/course';
import { Department } from './pages/department/department';
import { Instructor } from './pages/instructor/instructor';
import { Section } from './pages/section/section';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:Login
    },
    {
        path:'student',
        component:Student
    },
    {
        path:'course',
        component:Course
    },
    {
        path:'department',
        component:Department
    },
    {
        path:'instructor',
        component:Instructor
    },
    {
        path:'section',
        component:Section
    }
];

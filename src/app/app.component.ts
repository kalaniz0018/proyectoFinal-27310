import { Component, OnInit } from '@angular/core';
import { StudentsResponse } from './interfaces/student-response.interface';
import { StudentService } from './services/student-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'proyecto-final-comision27310';

  students!: StudentsResponse;

  constructor(public studentService: StudentService) { }


  ngOnInit(): void {
    this.getDataSeccion();
  }

  getDataSeccion() {
    this.students = this.studentService.GetStudentResponse();
    console.log(this.students);
  }

}

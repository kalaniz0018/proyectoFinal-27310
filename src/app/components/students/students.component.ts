import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student-response.interface';
import { StudentService } from 'src/app/services/student-service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Input() students!: Array<Student>;


  displayedColumns: string[] = ['position', 'name', 'surname', 'email'];



  /**
   * @title Styling columns using their auto-generated column names
   */

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

}

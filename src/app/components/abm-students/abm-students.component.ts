import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student-response.interface';
import { StudentService } from 'src/app/services/student-service';

@Component({
  selector: 'app-abm-students',
  templateUrl: './abm-students.component.html',
  styleUrls: ['./abm-students.component.css']
})

export class ABMStudentsComponent implements OnInit {

  @Input() students!: Array<Student>;


  displayedColumns: string[] = ['position', 'name', 'surname', 'email', 'modificar', 'eliminar'];


  /**
   * @title Styling columns using their auto-generated column names
   */

  constructor(public studentService: StudentService) { }

  ngOnInit(): void {
  }

}

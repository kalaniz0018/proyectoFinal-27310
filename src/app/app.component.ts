import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'proyecto-final-comision27310';



  constructor(public studentService: StudentService) { }


  ngOnInit(): void {
    
  }



}

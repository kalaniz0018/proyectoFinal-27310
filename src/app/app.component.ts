import { Component, OnInit, ViewChild } from '@angular/core';
import { ABMStudentsComponent } from './dashboard/components/abm-students/abm-students.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'proyecto-final-comision27310';
  @ViewChild(ABMStudentsComponent)
  ambChild!: ABMStudentsComponent;

  constructor() { }

  ngOnInit(): void {
    
  }

  childToParent(event: String){
    this.ambChild.cargarUsuarios()
    console.log(event);
  }

}

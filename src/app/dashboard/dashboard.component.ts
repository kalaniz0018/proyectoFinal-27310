import { Component, OnInit, ViewChild } from '@angular/core';
import { ABMStudentsComponent } from '../feature/components/abm-students/abm-students.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'proyecto-final-comision27310';
  @ViewChild(ABMStudentsComponent)
  ambChild!: ABMStudentsComponent;

  constructor() { }

  ngOnInit(): void {

  }

  childToParent(event: String) {
    this.ambChild.cargarUsuarios()
    console.log(event);
  }

}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/interfaces/student-response.interface';
import { StudentService } from 'src/app/services/student-service';

@Component({
  selector: 'app-abm-students',
  templateUrl: './abm-students.component.html',
  styleUrls: ['./abm-students.component.css']
})


export class ABMStudentsComponent implements OnInit {
//lo inicializamos como un array vacio
listUsuarios: Student[] = [];

displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'genero', 'acciones'];
dataSource!: MatTableDataSource<any>;

//Para poder usar el paginador
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

@Input('childToMaster') masterName: string | undefined;

constructor(private studentService: StudentService, private _snackBar: MatSnackBar) { }

ngOnInit(): void {
  //con esto estamos llamando los dados desde el servicio y no desde el componente 
  this.cargarUsuarios();
}

cargarUsuarios() {
  this.listUsuarios = this.studentService.getUsuarios();
  //vamos a setear los datos que tenemos en el data source en el array de usuarios listUsuarios
  //con el "new" creamos una instancia del mat table data source y le asignamos el array de usuarios
  this.dataSource = new MatTableDataSource(this.listUsuarios);
}
//Metodo de ciclo de vida de los componentes
//En este metodo de ciclo de vida le asgignamso al data source el paginator
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

//en este caso vamos a utilizar el indice del array para eliminar el usuario
eliminarUsuario(index: number) {
  this.studentService.eliminarUsuario(index);
  //cuando el usuario elimina un elemento tenemos que volver allamar el metodo cargarUsuarios
  this.cargarUsuarios();
  this._snackBar.open("Usuario fue eliminado con éxito", "", {
    //aca se pasa un objeto con configuraciones
    duration: 1500,
    horizontalPosition: "center",
    verticalPosition: "top",
    panelClass: ["snackbar-error"]
  })
}

}


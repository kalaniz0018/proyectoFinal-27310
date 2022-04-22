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
  //Variable de instancia para almacenar los datos recuperados por el servicio
  listUsuarios: Student[] = [];

  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'genero', 'acciones'];
  dataSource!: MatTableDataSource<any>;

  //Para poder usar el paginador
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input('childToMaster') masterName: string | undefined;

  //Inyección del servicio para que esté disponible en la clase
  constructor(private studentService: StudentService, private _snackBar: MatSnackBar) {
    //Suscripción al observable que devuelve listUsuarios. La respuesta asíncrona se 
    //resuelve mediante una función de flecha que almacena en data los datos recuperados por el servicio
  }

  ngOnInit(): void {
    //con esto estamos llamando los dados desde el servicio y no desde el componente 
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.studentService.getUsuarios().subscribe((data: Student[]) => {
      //Almacenamiento en la variable de instancia de los datos recuperados por el servicio
      this.listUsuarios = data;
      //vamos a setear los datos que tenemos en el data source en el array de usuarios listUsuarios
      //con el "new" creamos una instancia del mat table data source y le asignamos el array de usuarios
      this.dataSource = new MatTableDataSource(this.listUsuarios);
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }
  //Metodo de ciclo de vida de los componentes
  //En este metodo de ciclo de vida le asgignamso al data source el paginator


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //en este caso vamos a utilizar el indice del array para eliminar el usuario
  eliminarUsuario(id:string) {
    console.log(id);
    this.studentService.eliminarUsuario(id).subscribe((_: Student) => {
      //cuando el usuario elimina un elemento tenemos que volver allamar el metodo cargarUsuarios
      this.cargarUsuarios();
      this._snackBar.open("Usuario fue eliminado con éxito", "", {
        //aca se pasa un objeto con configuraciones
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: ["snackbar-error"]
      })
    });
  }

}


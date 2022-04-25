import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/core/interfaces/student-response.interface';
import { StudentService } from 'src/app/core/services/student-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  tiles: any[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];


  genero: any[] = ['masculino', 'femenino'];
  form: FormGroup;
  subscription! : Subscription;

  //aca vamos a crear un evento que va a ser emitido desde el hijo
  //en el padre le vamos a pasar el bomre que le pusimos al output
  @Output() childToParent = new EventEmitter<String>();


  constructor(private fb: FormBuilder, private studentService: StudentService, private _snackBar: MatSnackBar) {
    //this.form va a ser igual a la instamcia que estamos inyectandi en el formbuilder y el 
    //fomrbuilder va a ser tambien de tipo formgroup
    this.form = this.fb.group({
      //le pasamos las configuraciones que queremos que tenga el formulario
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
    });
  }
  ngOnInit(): void { 
    this.subscription = this.studentService.refresh.subscribe(() =>{
      this.agregarUsuario()
    })
  }

  agregarUsuario() {
    //voy a imprimir el formulario para ver si los valorene stan llegando bien o no
    //voy a crear una cnstante user va a ser de tipo ususario y lo vamos a configurar
    const user: Student = {
      //vamos a tener que acceder al valor del formulario a la propiedad usuario
      usuario: this.form.value.usuario,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      genero: this.form.value.genero,
      id: this.form.value.id
    }
    this.studentService.agregarUsuario(user).subscribe((_: Student) => {
      //avisar a abm para recargar usuarios
      this.childToParent.emit('recargar');

      this._snackBar.open("El usuario fue agregado con éxito", "", {
        //aca se pasa un objeto con configuraciones
        duration: 1500,
        horizontalPosition: "center",
        verticalPosition: "top",
        panelClass: ["snackbar-error"]
      })

    });

  }



}


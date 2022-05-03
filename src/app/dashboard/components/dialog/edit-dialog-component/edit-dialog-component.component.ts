import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentService } from 'src/app/core/services/student-service';

@Component({
  selector: 'app-edit-dialog-component',
  templateUrl: './edit-dialog-component.component.html',
  styleUrls: ['./edit-dialog-component.component.css']
})
export class EditDialogComponentComponent implements OnInit {

  editStudentForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentervice: StudentService) {

    this.editStudentForm = this.fb.group({
      usuario: new FormControl(data.usuario),
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      genero: new FormControl(data.genero)
    });
  }

  ngOnInit(): void { }

  editStudentDialog() {
    let student: any = {
      usuario: this.editStudentForm.value.usuario,
      nombre: this.editStudentForm.value.nombre,
      apellido: this.editStudentForm.value.apellido,
      genero: this.editStudentForm.value.genero,
    }
    this.studentervice.editarUsuario(student).subscribe((student) => {
      console.log(student);
    })
    this.dialogRef.close(student);
  }
}



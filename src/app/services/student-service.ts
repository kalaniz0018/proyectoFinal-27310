import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../interfaces/student-response.interface';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  public baseUrl =  'https://6262aedf005a66e1e3aba67e.mockapi.io/api/student';

  listStudent: Student[] = [
    { usuario: "jPerez", nombre: 'Julian', apellido: "Perez", genero: 'Masculino' },
    { usuario: "Akari", nombre: 'Karina', apellido: "Alaniz", genero: 'Femenino' },
    { usuario: "Fruben", nombre: 'Ruben', apellido: "Fanego", genero: 'Masculino' },
    { usuario: "Bmica", nombre: 'Micaela', apellido: "Balestieri", genero: 'Femenino' },
    { usuario: "Adaf", nombre: 'Dafne', apellido: "Alul", genero: 'Femenino' },
    { usuario: "Oara", nombre: 'Araxi', apellido: "Osikovsky", genero: 'Femenino' },
  
  ];

  constructor(private httpClient: HttpClient) { }

//Método de solicitud de obtención para obtener datos de la API
public getUsuarios(): Observable<Student[]> {
  //este get me devuelte un array de student 
  return this.httpClient.get<Student[]>(this.baseUrl);
}

//Metodo para eliminar un registro
//en los parametros le ponemos el index para decir que queremos eliminar donde este parado
// y que queremos eliminar un solo elemento
eliminarUsuario(index:number){
 this.listStudent.splice(index,1);
}

agregarUsuario(usuario: Student){
  //unshift --> agrega un nuevo elemento alcomienzo del array 
  this.listStudent.unshift(usuario);
}




}

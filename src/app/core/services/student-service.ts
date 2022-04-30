import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Student } from '../interfaces/student-response.interface';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _refresh = new Subject<void>();

  public baseUrl = 'https://6262aedf005a66e1e3aba67e.mockapi.io/api/student';

  constructor(private httpClient: HttpClient) { }

  get refresh() {
    return this._refresh;
  }

  //Método de solicitud de obtención para obtener datos de la API
  public getUsuarios(): Observable<Student[]> {
    //este get me devuelte un array de student 
    return this.httpClient.get<Student[]>(this.baseUrl);
  }

  //Metodo para eliminar un registro
  //en los parametros le ponemos el index para decir que queremos eliminar donde este parado
  // y que queremos eliminar un solo elemento
  eliminarUsuario(id: string): Observable<Student> {
    //this.listStudent.splice(index,1);
    return this.httpClient.delete<Student>(this.baseUrl + `/${id}`);
  }
  /* delete(idreservas: number): Observable<TblReservas> {
    return this.http.delete<TblReservas>(baseUrl + `/${idreservas}`);
  } */


  agregarUsuario(body: Student): Observable<Student> {
    console.log(body)
    return this.httpClient.post<Student>(this.baseUrl, body)
      .pipe(
        tap(() => {
          this.refresh.next
        })
      )
    //unshift --> agrega un nuevo elemento alcomienzo del array 
    //this.listStudent.unshift(usuario);
  }

  //busca el cliente ahhtp y que coincida el id, hace un put trayendolo modificado 
  editarUsuario(user: any): Observable<Student> {
    return this.httpClient.put<Student>(this.baseUrl + `/${user.id}`, user)
  }


}

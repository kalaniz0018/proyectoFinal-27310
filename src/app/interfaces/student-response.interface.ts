export interface StudentsResponse {
students: Array<Student>
}
export interface Student {
  usuario: string;
  nombre: string,
  apellido: string,
  genero: string
  }

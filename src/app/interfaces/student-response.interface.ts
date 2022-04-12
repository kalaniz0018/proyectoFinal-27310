export interface StudentsResponse {
students: Array<Student>
}
export interface Student {
  id: number,
  name: string,
  surname: string,
  email: string
  }

import { Injectable } from '@angular/core';
import { StudentsResponse } from '../interfaces/student-response.interface';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  GetStudentResponse(): StudentsResponse {
    return {
      students: [{
        id:1,
        name: "string1",
        surname: "string surname",
        email: "string@dtring"
      },
      {
        id:2,
        name: "string2",
        surname: "string surname",
        email: "string@dtring"
      },
      {
        id:3,
        name: "string3",
        surname: "string surname",
        email: "string@dtring"
      }
      ]
    }
  }


 

}

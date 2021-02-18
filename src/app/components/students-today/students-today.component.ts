import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../../services/records.service';
import { IStudentsRecord, IClassModel, ILessonModel, IRoomModel, INoteModel } from '../../models/IStudentsRecord';

@Component({
  selector: 'app-students-today',
  templateUrl: './students-today.component.html',
  styleUrls: ['./students-today.component.css']
})
export class StudentsTodayComponent implements OnInit {

  studentsToday: IStudentsRecord;
  classesToday: Array<IClassModel>;

  constructor(private recordService: RecordsService) { }

  ngOnInit() {
    this.recordService.getStudentsToday().subscribe(
      data => {
        this.studentsToday = data;
        this.classesToday = this.studentsToday.classes;
        console.log(data);
      },
      error => {
        console.error(error);
      }
    )

    
  }

}

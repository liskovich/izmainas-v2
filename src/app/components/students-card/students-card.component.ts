import { Component, Input, OnInit } from '@angular/core';
import { IClassModel, ILessonModel, IRoomModel, INoteModel } from '../../models/IStudentsRecord';

@Component({
  selector: 'app-students-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.css']
})
export class StudentsCardComponent implements OnInit {
  @Input() classModel : IClassModel;

  public lessons: Array<ILessonModel>;
  constructor() { }

  ngOnInit() {
    this.lessons = this.classModel.lessons;
  }

}

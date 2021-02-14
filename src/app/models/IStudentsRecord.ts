export interface IStudentsRecord {
  id: string;
  dayOfWeek: string;
  date: string;
  classes: Array<IClassModel>;
}

export interface IClassModel {
  class: string;
  lessons: Array<ILessonModel>;
}

export interface ILessonModel {
  lessonNumber: string;
  rooms: Array<IRoomModel>;
}

export interface IRoomModel {
  room: string;
  subject: string;
  teacherName: string;
  note: INoteModel;
}

export interface INoteModel {
  noteId: string;
  noteText: string;
  createdDate: string;
}

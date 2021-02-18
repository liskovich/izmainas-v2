//imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//components
import { AppComponent } from './app.component';
import { StudentsTodayComponent } from './components/students-today/students-today.component';
import { StudentsCardComponent } from './components/students-card/students-card.component';

//services
import { RecordsService } from './services/records.service';

const appRoutes: Routes = [
  { path: '', component: StudentsTodayComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsTodayComponent,
    StudentsCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RecordsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

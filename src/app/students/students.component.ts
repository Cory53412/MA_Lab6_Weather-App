import { Component, OnInit } from '@angular/core';
import { DataServiceService} from "../service/data-service.service";
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private service:DataServiceService) { }
  studentData:any = [];
  weatherData:any=[];
  ngOnInit(): void {
    this.service.getStudentData().subscribe(
      (data)=>{
          this.studentData = data.students;{
            console.log(this.studentData);
          }
      }
    );

    this.service.getWeatherData().subscribe(
      (dataw)=>{
        this.weatherData = dataw.weather;
        console.log(this.weatherData);
      }
    )
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  getStudentData():Observable<any>{
   return this.http.get('https://www.jsonblob.com/api/jsonblob/5b5b5510-5d6a-11ea-80ec-771adc8a4562');
  }

  getWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
   }
}

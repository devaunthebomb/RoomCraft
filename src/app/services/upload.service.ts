import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const baseUrl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private listOfProjects = new BehaviorSubject([]);
  public listOfProjectsObs  = this.listOfProjects.asObservable();
  
  constructor(public http: HttpClient) { }

  getAllProjects(){
    return this.http.get(`${baseUrl}/projects/get-projects`)
  }

  populateProjects(){
    this.getAllProjects().subscribe((data: any)=>{
      console.log(data);
      this.listOfProjects.next(data);
    }, (err)=>{
      console.log(err);
    });
  }
}

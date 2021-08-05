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
  
  constructor(public http: HttpClient) { 
    this.getAllImages();
  }

  getAllProjects(){
    return this.http.get(`${baseUrl}/projects/get-projects`);
  }


  getAllImages(){
    this.getAllProjects().subscribe((data: any)=>{
      console.log(data);
      this.listOfProjects.next(data);
    }, (err)=>{
      console.log(err);
    });
  }

  updateObs(resource){
    const newList = this.listOfProjects.value;
    newList.push(resource);
    this.listOfProjects.next(newList);
  }

  uploadImage(image){
    const formData = new FormData();
    formData.append("image", image);

    return this.http.post<any>(`${baseUrl}/projects/create-project`, formData);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';
import { Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  addingPhotos: any = [];
  constructor(private http : HttpClient) { }
  
  init(){
    this.getProjects()
  }

  getProjects(){
    return this.http.get("http://localhost:8080/mockProjects")
  }

  getItems(){
    return this.http.get("http://localhost:8080/items");
  }
}



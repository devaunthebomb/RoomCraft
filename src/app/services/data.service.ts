import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http : HttpClient) { }
  
  init(){
    this.getProjects()
  }

  getProjects(){
    return this.http.get("http://localhost:8080/projects")
  }

  getItems(){
    return this.http.get("http://localhost:8080/items");
  }
}



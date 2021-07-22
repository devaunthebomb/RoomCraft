import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Project } from '../services/project';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  projectsArr : Project[] = [];
  test: any = []
  constructor(private dataService : DataService) {}
  ngOnInit() {
    this.dataService.getProjects().subscribe((data: Project[]) =>
    {
      console.log(data);
      this.projectsArr = data;
    });
    this.test = this.dataService.addingPhotos
    // console.log(this.test[0].webViewPath)
}
}

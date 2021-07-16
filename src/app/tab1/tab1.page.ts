import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { Project } from '../services/project';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  projectsArr : Project[] = [];
  constructor(private dataService : DataService, private screenorientation: ScreenOrientation) {}
  ngOnInit() {
    this.dataService.getProjects().subscribe((data: Project[]) =>
    {
      console.log(data);
      this.projectsArr = data;
    });
    
    console.log(this.screenorientation.type);
  this.screenorientation.unlock()
  
}

}

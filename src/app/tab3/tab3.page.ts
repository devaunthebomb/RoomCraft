import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';



import array from './store-items'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // @Output() searchCritea = new EventEmitter<String>();
  term = {name: ""};
  storeItems : any[] = array;
  constructor(private router: Router) {}

  move(){
    this.router.navigateByUrl("/checkout")
  
  }

  // onSearch(value){
  //   this.searchTerm

  // }

}

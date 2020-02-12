import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  roommates = [
    {name: "Lena", id: 0, rent: 630, parking: 100, utilities: null, total: null},
    {name: "Evan", id: 1, rent: 630, parking: 0, utilities: null, total: null},
    {name: "Megan", id: 2, rent: 1000, parking: 100, utilities: null, total: null},
    {name: "Chris", id: 4, rent: 250, parking: 0, utilities: null, total: null},
  ];
  selected = this.roommates[0];
  total = null;

  constructor() { }

  ngOnInit() {
  }

  onClick(id){
    this.selected = this.roommates[id]
  }

}

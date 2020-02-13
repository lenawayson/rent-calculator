import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const TOTAL_RENT = 2520; 
const ACTIVE_RESIDENTS = 3;

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  roommates = [
    {name: "Lena", id: 0, rent: 630, parking: 100, utilities: null, owed: null},
    {name: "Evan", id: 1, rent: 630, parking: 0, utilities: null, owed: null},
    {name: "Megan", id: 2, rent: 1000, parking: 100, utilities: null, owed: null},
    {name: "Chris", id: 4, rent: 250, parking: 0, utilities: 0, owed: null},
  ];
  selected = this.roommates[0]; //initial selection
  totalDue = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.totalDue = params.q;
      });
    this.calculateOwed();
  }

  select(id){
    this.selected = this.roommates[id];
  }

  calculateOwed(){
    let misc = this.totalDue - TOTAL_RENT;
    let utils = misc - this.calculateTotalParking();
    this.roommates.forEach(x => {
      if (x.utilities === null){
        x.utilities = parseFloat((utils/ACTIVE_RESIDENTS).toFixed(2));
      }
      x.owed = x.rent + x.utilities + x.parking;
    })
  }

  calculateTotalParking(){
    let sum = 0;
    this.roommates.forEach(x => {
      sum += x.parking;
    })
    return sum;
  }

}

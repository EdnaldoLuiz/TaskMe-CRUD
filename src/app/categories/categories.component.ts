import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  study = '/assets/dashboard-icons/study.png';
  meditation = '/assets/dashboard-icons/meditation.png';
  sports = '/assets/dashboard-icons/sports.png';
  entertainment = '/assets/dashboard-icons/entertainment.png';

  constructor() { }

  ngOnInit(): void {
  }

}

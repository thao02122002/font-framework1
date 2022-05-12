import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
// @Input() users: any;
@Input('users') teachers: any; // nhận gt của users và gán vào teachers
  constructor() { }

  ngOnInit(): void {
  }

}

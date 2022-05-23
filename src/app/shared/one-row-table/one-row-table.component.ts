import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-row-table',
  templateUrl: './one-row-table.component.html',
  styleUrls: ['./one-row-table.component.scss']
})
export class OneRowTableComponent implements OnInit {

  constructor() { }

  @Input() head ="";
  @Input() rows:string[]=[];

  ngOnInit(): void {
  }

}

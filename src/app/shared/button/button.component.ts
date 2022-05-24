import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }
  @Input() text =""
  @Output() goToPokemon = new EventEmitter();


  ngOnInit(): void {
  }

  onClick(){
     this.goToPokemon.emit()
  }

}

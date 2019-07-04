import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Output() public sendToParentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent(message: string) {
    this.sendToParentEvent.emit(message);
  }

}

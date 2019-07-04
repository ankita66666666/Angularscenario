import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() public sendToParentEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent(message: string) {
    this.sendToParentEvent.emit(message);
  }

}

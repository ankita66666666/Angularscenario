import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario6-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() sendEventToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendMessageToSibling(message: string) {
    this.sendEventToParent.emit(message);
  }

}

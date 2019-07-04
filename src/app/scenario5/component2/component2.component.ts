import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Output() public sendToParentEvent = new EventEmitter();

  public statusMessage: string;

  constructor() { }

  ngOnInit() {
  }

  sendMessageToParent(event){
    this.statusMessage = 'Recieved message from child. Passing it to parent';
    this.sendToParentEvent.emit(event);
    this.statusMessage = 'Passed message to parent';
  }

}

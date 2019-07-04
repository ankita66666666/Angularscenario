import { Component, OnInit } from '@angular/core';
import { SiblingMessageService } from '../../services/sibling-message.service';


@Component({
  selector: 'app-scenario7-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private siblingMessageService: SiblingMessageService) { }

  ngOnInit() {
  }

  onMessageTyped(message: string) {
    this.siblingMessageService.sendMessage(message);
  }

}

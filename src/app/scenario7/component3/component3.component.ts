import { Component, OnInit } from '@angular/core';
import { SiblingMessageService } from '../../services/sibling-message.service';


@Component({
  selector: 'app-scenario7-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  public messageFromSibling: string;

  constructor(private siblingMessageService: SiblingMessageService) { }

  ngOnInit() {
    this.siblingMessageService.getMessage().subscribe(
      (message) => {
        this.messageFromSibling = message;
      }
    );
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @Input('messageToChild') public messageFromParent: string; 

  constructor() { }

  ngOnInit() {
  }

}

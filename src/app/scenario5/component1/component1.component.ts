import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario5-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  public messageFromChild: string;

  constructor() { }

  ngOnInit() {
  }

}

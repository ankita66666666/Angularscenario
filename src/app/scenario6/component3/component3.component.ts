import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  @Input() public messageFromSibling: string;

  constructor() { }

  ngOnInit() {
  }

}

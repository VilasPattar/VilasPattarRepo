import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  constructor() { }

  public childVar:string="SampleChildValue"

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('title') title: string = "Zippy Title";
  isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isExpanded = !this.isExpanded;
  }

}

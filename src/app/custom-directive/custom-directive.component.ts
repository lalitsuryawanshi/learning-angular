import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.css']
})
export class CustomDirectiveComponent implements OnInit {

  title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}

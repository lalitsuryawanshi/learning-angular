import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('likesCount') likesCount: number = 10;
  @Input('isActive') isActive!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}

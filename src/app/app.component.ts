import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
  tweet = {
    body: 'tweet body',
    likesCount: 10,
    isLiked: true
  }
}

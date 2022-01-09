import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  categories = [
    { id: 1, name: 'Development' },
    { id: 1, name: 'Art' },
    { id: 1, name: 'Languages' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submit(course: any) {
    console.log(course);
  }

}

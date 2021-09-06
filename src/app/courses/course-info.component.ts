import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    const id = param? +param : -1;
    const receivedCourse = this.courseService.retrieveById(id);
    if (receivedCourse) {
      this.course = receivedCourse;
    }
  }

  save(): void {
    this.courseService.save(this.course);
  }
}
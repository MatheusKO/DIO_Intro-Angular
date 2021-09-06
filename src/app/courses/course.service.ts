import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  retrieveAll(): Course[] {
    return COURSES;
  }

  retrieveById(id: number): Course | undefined {
    return COURSES.find((courseIterator: Course) => courseIterator.id === id);
  }

  save(course: Course): void {
    if(course.id) {
      const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id);
      COURSES[index] = course;
    }
  }

}

var COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular: CLI',
    releaseDate: 'November 2, 2019',
    description: 'Neste curso, os alunos irão conhecer o Angular CLI.',
    duration: 120,
    code: 'XLF-1212',
    rating: 3,
    price: 12.99,
    imageUrl: '/assets/images/cli.png'
  },
  {
    id: 2,
    name: 'Angular: Forms',
    releaseDate: 'November 4, 2019',
    description: 'Neste curso, os alunos irão conhecer de maneira profunda o módulo de Forms.',
    duration: 80,
    code: 'DWQ-3412',
    rating: 3.5,
    price: 24.99,
    imageUrl: '/assets/images/forms.png'
  },
  {
    id: 3,
    name: 'Angular: HTTP',
    releaseDate: 'November 8, 2019',
    description: 'Neste curso, os alunos irão conhecer o Angular HTTP.',
    duration: 80,
    code: 'QLP-0913',
    rating: 4,
    price: 36.99,
    imageUrl: '/assets/images/http.png'
  },
  {
    id: 4,
    name: 'Angular: Router',
    releaseDate: 'November 16, 2019',
    description: 'Neste curso, os alunos irão conhecer os recursos dispníveis no módulo de Router.',
    duration: 80,
    code: 'OHP-1095',
    rating: 4.5,
    price: 46.99,
    imageUrl: '/assets/images/router.png'
  },
  {
    id: 5,
    name: 'Angular: Animations',
    releaseDate: 'November 25, 2019',
    description: 'Neste curso, os alunos irão aprender sobre Animations.',
    duration: 60,
    code: 'PWY-9381',
    rating: 5,
    price: 56.99,
    imageUrl: '/assets/images/animations.png'
  }
  
]
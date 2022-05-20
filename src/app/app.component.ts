import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-micro-frontend';

  title1 = 'project-one';
  title2 = 'project-two';
  title3 = 'project-three';

  countExampleOne = 0;
  countExampleTwo = 0;
  couuntExampleThree = 0;

  clickElement(event: CustomEvent): void {
    console.log(event);

    // switch (event.detail) type string example-one o example-two o example-three
    switch (event.detail) {
      case this.title1:
        this.countExampleOne += 1;
        break;
      case this.title2:
        this.countExampleTwo += 1;
        break;
      case this.title3:
        this.couuntExampleThree += 1;
        break;
      default:
        break;
    }
  }
}

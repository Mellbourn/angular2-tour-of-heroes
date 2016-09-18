import { Component } from '@angular/core';

@Component({
  template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
  `,
  selector: 'my-app'
})
export class AppComponent {
    title = 'Tour of Heroes';
}


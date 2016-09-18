import { Component } from '@angular/core';

@Component({
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/heroes">Heroes</a>
    <router-outlet></router-outlet>
  `,
  selector: 'my-app'
})
export class AppComponent {
    title = 'Tour of Heroes';
}


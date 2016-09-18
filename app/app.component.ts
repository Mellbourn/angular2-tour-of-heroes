import { Component } from '@angular/core';

@Component({
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  selector: 'my-app'
})
export class AppComponent {
    title = 'Tour of Heroes';
}


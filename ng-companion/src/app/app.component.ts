import { Component } from '@angular/core';

@Component({
  selector: 'wdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loggedInUser = { id: 'angular', avatar: 'dragon2' };
}

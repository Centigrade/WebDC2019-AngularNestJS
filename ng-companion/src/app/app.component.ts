import { Component } from '@angular/core';
import { SAMPLE_USER } from './data/sample-companions';
import { Companion } from './types';

@Component({
  selector: 'wdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loggedInUser: Companion = SAMPLE_USER;

  public openMyProfile() {
    console.log(`Open my profile ('${this.loggedInUser.id}').`);
  }
}

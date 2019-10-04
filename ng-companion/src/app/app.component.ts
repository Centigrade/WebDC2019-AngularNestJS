import { Component } from '@angular/core';
import { SAMPLE_USER } from '@dtos/data/sample-companions';
import { Companion } from '@dtos/types';

@Component({
  selector: 'wdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public loggedInUser: Companion = SAMPLE_USER;
}

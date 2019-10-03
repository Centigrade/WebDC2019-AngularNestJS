import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanionsService } from 'src/app/services/companions.service';
import { Companion } from 'src/app/types';
@Component({
  selector: 'wdc-companions',
  templateUrl: './companions.component.html',
  styleUrls: ['./companions.component.scss'],
})
export class CompanionsComponent implements OnInit {
  public companions$: Observable<Companion[]>;

  constructor(private service: CompanionsService) {}

  ngOnInit() {
    this.companions$ = this.service.getAll();
  }

  public openProfile(id: string) {
    console.log(`Open profile for companion ('${id}').`);
  }
}

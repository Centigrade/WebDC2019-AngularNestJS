import { Component, OnInit } from '@angular/core';
import { Companion } from '@dtos/types';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CompanionsService } from '../../services/companions.service';
@Component({
  selector: 'wdc-companions',
  templateUrl: './companions.component.html',
  styleUrls: ['./companions.component.scss'],
})
export class CompanionsComponent implements OnInit {
  public companions$: Observable<Companion[]>;

  constructor(private service: CompanionsService) {}

  ngOnInit() {
    this.companions$ = this.service
      .getAll()
      .pipe(tap(companions => console.log(JSON.stringify(companions))));
  }
}

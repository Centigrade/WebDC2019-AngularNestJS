import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SAMPLE_USER } from '@dtos/data/sample-companions';
import { CompanionDetails } from '@dtos/types';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CompanionsService } from '../../services/companions.service';

@Component({
  selector: 'wdc-companion-detail',
  templateUrl: './companion-detail.component.html',
  styleUrls: ['./companion-detail.component.scss'],
})
export class CompanionDetailComponent implements OnInit {
  public details$: Observable<CompanionDetails>;

  constructor(private route: ActivatedRoute, private service: CompanionsService) {}

  ngOnInit() {
    this.details$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.service.getDetails(id)),
      tap(details => console.log(JSON.stringify(details))),
    );
  }

  public sayHello(companionId: string) {
    this.service.sayHello(SAMPLE_USER.id, companionId).toPromise();
  }
}

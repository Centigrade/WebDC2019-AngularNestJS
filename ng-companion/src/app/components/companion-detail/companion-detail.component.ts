import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanionDetails } from '@interfaces';
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
    this.service
      .sayHello('angular', companionId)
      .pipe(tap(message => console.log(message)))
      .toPromise();
  }
}

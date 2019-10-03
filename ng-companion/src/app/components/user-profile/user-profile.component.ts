import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CompanionsService } from 'src/app/services/companions.service';
import { CompanionDetails } from 'src/app/types';

@Component({
  selector: 'wdc-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  public details$: Observable<CompanionDetails>;

  constructor(private route: ActivatedRoute, private service: CompanionsService) {}

  ngOnInit() {
    this.details$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.service.getDetails(id)),
    );
  }
}

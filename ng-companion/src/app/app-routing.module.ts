import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanionDetailComponent } from './components/companion-detail/companion-detail.component';
import { CompanionsComponent } from './components/companions/companions.component';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'companions',
  },
  { path: 'companions', component: CompanionsComponent },
  { path: 'companion/:id', component: CompanionDetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'companions' },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

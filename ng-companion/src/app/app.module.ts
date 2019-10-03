import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanionsComponent } from './components/companions/companions.component';
import { CompanionDetailComponent } from './components/companion-detail/companion-detail.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, CompanionsComponent, CompanionDetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

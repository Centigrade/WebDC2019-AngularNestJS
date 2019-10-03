import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanionDetailComponent } from './components/companion-detail/companion-detail.component';
import { CompanionsComponent } from './components/companions/companions.component';
import { SimpleMarkdownPipe } from './pipes/simple-markdown.pipe';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, CompanionsComponent, CompanionDetailComponent, SimpleMarkdownPipe, UserProfileComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

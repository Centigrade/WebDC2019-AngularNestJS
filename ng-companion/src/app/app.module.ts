import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanionDetailComponent } from './components/companion-detail/companion-detail.component';
import { CompanionsComponent } from './components/companions/companions.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SimpleMarkdownPipe } from './pipes/simple-markdown.pipe';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    CompanionsComponent,
    CompanionDetailComponent,
    SimpleMarkdownPipe,
    UserProfileComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

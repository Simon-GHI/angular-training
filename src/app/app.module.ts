import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Modules
import { AppRoutingModule } from 'src/app/app-routing.module';
// Components
import { AppComponent } from 'src/app/app.component';
import { NavBarComponent } from '@components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavBarComponent],
})
export class AppModule {}

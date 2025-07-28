import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import your components
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
// import your routing module
import { AppRoutingModule } from './app-routing.module'; // <-- Import this

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule   // <-- Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SectionsComponent } from './sections/sections.component';
import { ScrollService } from './services/shared/scroll.service';
import { ThemeService } from './services/shared/theme.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SectionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ScrollService,ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ThemeService } from './app/services/shared/theme.service';
import { ScrollService } from './app/services/shared/scroll.service';

bootstrapApplication(AppComponent, {
  providers: [ThemeService, ScrollService]
}).catch(err => console.error(err));

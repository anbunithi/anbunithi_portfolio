import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemeService } from './services/shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService: Title, private themeService: ThemeService) {
    this.titleService.setTitle('Anbunithi AV - Angular Developer Portfolio');
  }
  ngOnInit() {
    // Listen for system theme preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        // Only auto-update if user hasn't manually set a preference
        const darkModeOn = e.matches;
        this.themeService['setTheme'](darkModeOn);
      }
    });
  }
}

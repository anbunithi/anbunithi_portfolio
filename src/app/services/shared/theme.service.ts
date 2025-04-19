import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkThemeSubject = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkThemeSubject.asObservable();

  constructor() {
    // Check for user's preferred theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // If theme preference exists, use it
      this.setTheme(savedTheme === 'dark');
    } else {
      // Otherwise, check for system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark);
    }
  }

  toggleTheme(): void {
    const newTheme = !this.isDarkThemeSubject.value;
    this.setTheme(newTheme);
  }

  private setTheme(isDark: boolean): void {
    this.isDarkThemeSubject.next(isDark);
    
    // Update document class for global styling
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
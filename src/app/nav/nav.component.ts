import { Component } from '@angular/core';
import { developer } from '../data/portfolio.data';
import { section } from '../data/section.data';
import { ScrollService } from '../services/shared/scroll.service';
import { ThemeService } from '../services/shared/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  developer = developer;
  mobileMenuOpen: boolean = false;
  activeSection: string = 'home';
  sections = section;
  isDarkTheme: boolean = false;
  constructor(
    private scrollService: ScrollService,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.scrollService.activeSection$.subscribe((section) => {
      this.activeSection = section;
    });
    
    this.themeService.isDarkTheme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  setActiveSection(section: string): void {
    this.scrollService.setActiveSection(section);
  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}

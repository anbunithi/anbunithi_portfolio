import { Component } from '@angular/core';
import { developer } from '../data/portfolio.data';
import { section } from '../data/section.data';
import { ScrollService } from '../services/shared/scroll.service';

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
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.activeSection$.subscribe((section) => {
      this.activeSection = section;
    });
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  setActiveSection(section: string): void {
    this.scrollService.setActiveSection(section);
  }
}

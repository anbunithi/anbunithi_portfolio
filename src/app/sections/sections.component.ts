import { Component } from '@angular/core';
import { developer } from '../data/portfolio.data';
import { ScrollService } from '../services/shared/scroll.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent {
  developer = developer;
  currentYear: number = new Date().getFullYear();
  mobileMenuOpen: boolean = false;
  activeSection: string = 'home';
  showMessagePopup: boolean = false;
  
  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.scrollService.activeSection$.subscribe((section) => {
      this.activeSection = section;
    });
  }

  openMessagePopup(event: Event): void {
    event.preventDefault();
    this.showMessagePopup = true;
  }
  
  closeMessagePopup(): void {
    this.showMessagePopup = false;
  }
}

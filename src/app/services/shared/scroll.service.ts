import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private activeSectionSubject = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSectionSubject.asObservable();

  constructor() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  private onScroll(): void {
    const scrollPosition = window.scrollY;

    // Get all sections
    const sections = document.querySelectorAll('section');

    // Check which section is currently in view
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = section.id;
        this.activeSectionSubject.next(sectionId);
        break;
      }
    }
  }

  setActiveSection(section: string): void {
    this.activeSectionSubject.next(section);
  }
}
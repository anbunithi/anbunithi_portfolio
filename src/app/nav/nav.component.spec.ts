import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { ScrollService } from '../services/shared/scroll.service';
import { ThemeService } from '../services/shared/theme.service';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let scrollService: ScrollService;
  let themeService: ThemeService;

  beforeEach(() => {
    // Mock window.matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    scrollService = new ScrollService();
    themeService = new ThemeService();

    TestBed.configureTestingModule({
      declarations: [NavComponent],
      providers: [
        { provide: ScrollService, useValue: scrollService },
        { provide: ThemeService, useValue: themeService }
      ]
    });
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component and inject services', () => {
    expect(component).toBeTruthy();
    expect(component['scrollService']).toBe(scrollService);
    expect(component['themeService']).toBe(themeService);
  });
});

import 'reflect-metadata';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';
import { SectionsComponent } from './sections/sections.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeService } from './services/shared/theme.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let titleService: Title;
  let themeService: ThemeService;

   beforeEach(() => {
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
  
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavComponent, SectionsComponent, FooterComponent],
      providers: [Title, ThemeService],
    });
  
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    titleService = TestBed.inject(Title);
    themeService = TestBed.inject(ThemeService);
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

   it('should set the title on initialization', () => {
    const setTitleSpy = jest.spyOn(titleService, 'setTitle');
    component.ngOnInit(); // Ensure ngOnInit is called
    expect(setTitleSpy).toHaveBeenCalledWith('Anbunithi AV - Angular Developer Portfolio');
  });

});

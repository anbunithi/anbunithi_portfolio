import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';
import { SectionsComponent } from './sections/sections.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('should have the correct selector', () => {
    const metadata = (AppComponent as any).__annotations__[0];
    expect(metadata.selector).toBe('app-root');
  });

  describe('AppComponent', () => {
    let titleService: Title;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent, NavComponent, SectionsComponent, FooterComponent],
        providers: [Title]
      });

      titleService = TestBed.inject(Title);
    });

    it('should have the correct selector', () => {
      const metadata = (AppComponent as any).__annotations__[0];
      expect(metadata.selector).toBe('app-root');
    });

    it('should set the correct title on initialization', () => {
      const titleSpy = jest.spyOn(titleService, 'setTitle');
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      expect(titleSpy).toHaveBeenCalledWith('Anbunithi AV - Angular Developer Portfolio');
    });
  });
});

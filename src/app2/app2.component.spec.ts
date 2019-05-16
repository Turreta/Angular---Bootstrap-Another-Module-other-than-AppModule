import { TestBed, async } from '@angular/core/testing';
import { App2Component } from './app2.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        App2Component
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'practice'`, () => {
    const fixture = TestBed.createComponent(App2Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('practice');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(App2Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to practice!');
  });
});

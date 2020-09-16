import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GTranslateComponent } from './gtranslate.component';

describe('GTranslateComponent', () => {
  let component: GTranslateComponent;
  let fixture: ComponentFixture<GTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GDocsComponent } from './gdocs.component';

describe('GDocsComponent', () => {
  let component: GDocsComponent;
  let fixture: ComponentFixture<GDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

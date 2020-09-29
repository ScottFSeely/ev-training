import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { timer, TimeoutError } from 'rxjs';

import { UnitTestComponent } from './unit-test.component';

describe('UnitTestComponent', () => {
  let component: UnitTestComponent;
  let fixture: ComponentFixture<UnitTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle boolVal asynchronously', fakeAsync(() => {
    expect(component.boolVal).toBeTruthy();
    component.toggleAsync();
    timer(500);
    expect(component.boolVal).toBeTruthy();
    component.testFun();
    
  }));
});

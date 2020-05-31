import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LondrinaComponent } from './londrina.component';

describe('LondrinaComponent', () => {
  let component: LondrinaComponent;
  let fixture: ComponentFixture<LondrinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LondrinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LondrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

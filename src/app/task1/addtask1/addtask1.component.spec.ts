import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addtask1Component } from './addtask1.component';

describe('Addtask1Component', () => {
  let component: Addtask1Component;
  let fixture: ComponentFixture<Addtask1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addtask1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addtask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

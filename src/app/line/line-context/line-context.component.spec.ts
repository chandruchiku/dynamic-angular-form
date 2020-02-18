/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LineContextComponent } from './line-context.component';

describe('LineContextComponent', () => {
  let component: LineContextComponent;
  let fixture: ComponentFixture<LineContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

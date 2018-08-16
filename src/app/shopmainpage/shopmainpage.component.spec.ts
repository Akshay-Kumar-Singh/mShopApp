import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmainpageComponent } from './shopmainpage.component';

describe('ShopmainpageComponent', () => {
  let component: ShopmainpageComponent;
  let fixture: ComponentFixture<ShopmainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopmainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

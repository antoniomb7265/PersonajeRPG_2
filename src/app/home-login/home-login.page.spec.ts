import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoginPage } from './home-login.page';

describe('HomeLoginPage', () => {
  let component: HomeLoginPage;
  let fixture: ComponentFixture<HomeLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

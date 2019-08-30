import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestriptionPage } from './destription.page';

describe('DestriptionPage', () => {
  let component: DestriptionPage;
  let fixture: ComponentFixture<DestriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestriptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

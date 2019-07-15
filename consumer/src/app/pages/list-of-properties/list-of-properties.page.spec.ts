import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfPropertiesPage } from './list-of-properties.page';

describe('ListOfPropertiesPage', () => {
  let component: ListOfPropertiesPage;
  let fixture: ComponentFixture<ListOfPropertiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfPropertiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfPropertiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

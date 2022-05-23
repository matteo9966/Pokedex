import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneRowTableComponent } from './one-row-table.component';

describe('OneRowTableComponent', () => {
  let component: OneRowTableComponent;
  let fixture: ComponentFixture<OneRowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneRowTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneRowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

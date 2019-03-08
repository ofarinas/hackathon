import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueRowComponent } from './value-row.component';

describe('ValueRowComponent', () => {
  let component: ValueRowComponent;
  let fixture: ComponentFixture<ValueRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ValueRowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

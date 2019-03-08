import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieDiagrammComponent } from './pie-diagramm.component';

describe('PieDiagrammComponent', () => {
  let component: PieDiagrammComponent;
  let fixture: ComponentFixture<PieDiagrammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PieDiagrammComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieDiagrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudidisplayComponent } from './audidisplay.component';

describe('AudidisplayComponent', () => {
  let component: AudidisplayComponent;
  let fixture: ComponentFixture<AudidisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudidisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudidisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

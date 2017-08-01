import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainTxtOutputComponent } from './plain-txt-output.component';

describe('PlainTxtOutputComponent', () => {
  let component: PlainTxtOutputComponent;
  let fixture: ComponentFixture<PlainTxtOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainTxtOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainTxtOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

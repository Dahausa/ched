import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongConfigurationComponent } from './song-configuration.component';

describe('SongConfigurationComponent', () => {
  let component: SongConfigurationComponent;
  let fixture: ComponentFixture<SongConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

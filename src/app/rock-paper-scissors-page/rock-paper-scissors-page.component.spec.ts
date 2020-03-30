import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RockPaperScissorsPageComponent } from './rock-paper-scissors-page.component';

describe('RockPaperScissorsPageComponent', () => {
  let component: RockPaperScissorsPageComponent;
  let fixture: ComponentFixture<RockPaperScissorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RockPaperScissorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RockPaperScissorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

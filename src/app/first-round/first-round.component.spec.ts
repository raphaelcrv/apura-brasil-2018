import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRoundComponent } from './first-round.component';

describe('FirstRoundComponent', () => {
  let component: FirstRoundComponent;
  let fixture: ComponentFixture<FirstRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

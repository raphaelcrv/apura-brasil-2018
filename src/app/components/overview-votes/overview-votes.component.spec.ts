import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewVotesComponent } from './overview-votes.component';

describe('OverviewVotesComponent', () => {
  let component: OverviewVotesComponent;
  let fixture: ComponentFixture<OverviewVotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewVotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewVotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

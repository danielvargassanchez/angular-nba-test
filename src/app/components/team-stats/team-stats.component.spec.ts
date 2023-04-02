import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatsComponent } from './team-stats.component';

describe('TeamResultsComponent', () => {
  let component: TeamStatsComponent;
  let fixture: ComponentFixture<TeamStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should castString', () => {
    expect(component.castString('12')).toEqual(12)
  })
});
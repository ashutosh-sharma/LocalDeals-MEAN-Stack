import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContent } from './dashboard-content.component';

describe('DashboardContent', () => {
  let component: DashboardContent;
  let fixture: ComponentFixture<DashboardContent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardContent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

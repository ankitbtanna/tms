import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderActionsComponent } from './stake-holder-actions.component';

describe('StakeholderActionsComponent', () => {
  let component: StakeholderActionsComponent;
  let fixture: ComponentFixture<StakeholderActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StakeholderActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

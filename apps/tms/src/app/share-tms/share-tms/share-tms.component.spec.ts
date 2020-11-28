import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTmsComponent } from './share-tms.component';

describe('ShareTmsComponent', () => {
  let component: ShareTmsComponent;
  let fixture: ComponentFixture<ShareTmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareTmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareTmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

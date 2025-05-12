import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreProductsSectionComponent } from './more-products-section.component';

describe('MoreProductsSectionComponent', () => {
  let component: MoreProductsSectionComponent;
  let fixture: ComponentFixture<MoreProductsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreProductsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreProductsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationSectionComponent } from './inspiration-section.component';

describe('InspirationSectionComponent', () => {
  let component: InspirationSectionComponent;
  let fixture: ComponentFixture<InspirationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspirationSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspirationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollCartComponent } from './scroll-cart.component';

describe('ScrollCartComponent', () => {
  let component: ScrollCartComponent;
  let fixture: ComponentFixture<ScrollCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

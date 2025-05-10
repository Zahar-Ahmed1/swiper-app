import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VGComponent } from './v-g.component';

describe('VGComponent', () => {
  let component: VGComponent;
  let fixture: ComponentFixture<VGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

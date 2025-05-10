import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPComponent } from './v-p.component';

describe('VPComponent', () => {
  let component: VPComponent;
  let fixture: ComponentFixture<VPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

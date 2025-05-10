import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VVComponent } from './v-v.component';

describe('VVComponent', () => {
  let component: VVComponent;
  let fixture: ComponentFixture<VVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VVComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

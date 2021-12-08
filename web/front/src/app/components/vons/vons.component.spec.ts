import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VonsComponent } from './vons.component';

describe('VonsComponent', () => {
  let component: VonsComponent;
  let fixture: ComponentFixture<VonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

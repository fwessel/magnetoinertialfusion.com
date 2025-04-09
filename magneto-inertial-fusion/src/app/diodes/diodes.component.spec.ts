import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiodesComponent } from './diodes.component';

describe('DiodesComponent', () => {
  let component: DiodesComponent;
  let fixture: ComponentFixture<DiodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiodesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

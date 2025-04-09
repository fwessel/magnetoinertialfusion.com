import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorsComponent } from './resistors.component';

describe('ResistorsComponent', () => {
  let component: ResistorsComponent;
  let fixture: ComponentFixture<ResistorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResistorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

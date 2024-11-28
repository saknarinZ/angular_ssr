import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBerComponent } from './side-ber.component';

describe('SideBerComponent', () => {
  let component: SideBerComponent;
  let fixture: ComponentFixture<SideBerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

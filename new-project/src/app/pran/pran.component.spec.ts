import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PranComponent } from './pran.component';

describe('PranComponent', () => {
  let component: PranComponent;
  let fixture: ComponentFixture<PranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

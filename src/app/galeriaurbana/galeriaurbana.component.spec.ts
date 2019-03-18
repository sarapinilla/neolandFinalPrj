import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaurbanaComponent } from './galeriaurbana.component';

describe('GaleriaurbanaComponent', () => {
  let component: GaleriaurbanaComponent;
  let fixture: ComponentFixture<GaleriaurbanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaurbanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaurbanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScuentoComponent } from './scuento.component';

describe('ScuentoComponent', () => {
  let component: ScuentoComponent;
  let fixture: ComponentFixture<ScuentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScuentoComponent]
    });
    fixture = TestBed.createComponent(ScuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

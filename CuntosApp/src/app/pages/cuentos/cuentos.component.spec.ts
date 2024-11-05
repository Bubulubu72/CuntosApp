import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentosComponent } from './cuentos.component';

describe('CuentosComponent', () => {
  let component: CuentosComponent;
  let fixture: ComponentFixture<CuentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuentosComponent]
    });
    fixture = TestBed.createComponent(CuentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

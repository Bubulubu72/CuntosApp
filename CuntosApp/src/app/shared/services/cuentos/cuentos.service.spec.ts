import { TestBed } from '@angular/core/testing';

import { CuentosService } from './cuentos.service';

describe('CuentosService', () => {
  let service: CuentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

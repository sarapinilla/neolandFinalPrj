import { TestBed } from '@angular/core/testing';

import { PiezasService } from './piezas.service';

describe('PiezasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiezasService = TestBed.get(PiezasService);
    expect(service).toBeTruthy();
  });
});

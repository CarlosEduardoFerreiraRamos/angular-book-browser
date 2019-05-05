import { TestBed } from '@angular/core/testing';

import { MockBackEndInterceptorService } from './mock-back-end-interceptor.service';

describe('MockBackEndInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockBackEndInterceptorService = TestBed.get(MockBackEndInterceptorService);
    expect(service).toBeTruthy();
  });
});

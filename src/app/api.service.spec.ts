import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';


describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [ ApiService ],
        imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiService);
    console.log('loading the ApiService Test...')
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give value', () => {
      expect(service.getNews()).toBeDefined()
  })
});


import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {

    let httpMock: HttpTestingController;
    let service: ApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [ApiService],
            providers: [
                HttpTestingController
            ]
        });
        httpMock = TestBed.inject(HttpTestingController);
        service = TestBed.inject(ApiService);

    });
});

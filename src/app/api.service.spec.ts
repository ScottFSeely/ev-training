import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {

    let HttpTestingController: HttpTestingController;
    let service: ApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [ApiService]
        });
        HttpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(ApiService);

    });

    it('should be created', () => {

    });
});

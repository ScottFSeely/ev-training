import { async, ComponentFixture, TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing'

import {HttpClientModule} from '@angular/common/http';

import { NewsComponent } from './news.component';
import { of } from 'rxjs';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

describe('NewsComponent: stub ApiService should create', () => {
  let injector: TestBed;
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NewsComponent],
      providers: [
        ApiService, 
        HttpTestingController]
    });
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;

    // console.log(fixture);
    // console.log(component);
  });

  afterAll(() => {
    console.log(fixture);
    console.log(component);
    console.log(httpMock);
  });

  afterEach(() => {
    // httpMock.verify();
  });

  it('#injector should be Truthy', () => {
    expect(injector).toBeTruthy();
  });
  it('#service should be Truthy', () => {
    expect(service).toBeTruthy();
  });
  it('#httpMock should be Truthy', () => {
    expect(httpMock).toBeTruthy();
  });
  it('#fixture should be Truthy', () => {
    expect(fixture).toBeTruthy();
  });
  it('#component should be Truthy', () => {
    expect(component).toBeTruthy();
  });
  it('#component should return articles', () => {
    let articles = component.articles;
    console.log(`Show me the articles! ${component.articles}`);
    component.articles = "test";
    console.log(`Show me the articles! ${component.articles}`);

  })

});


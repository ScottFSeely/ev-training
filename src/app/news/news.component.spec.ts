import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs';

import { NewsComponent } from './news.component';
import { ApiService } from '../api.service';
import { HttpTestingController } from '@angular/common/http/testing';

// describe(`NewsComponent: stub ApiService should create using Scott's code`, () => {
//   let component: NewsComponent;
//   let fixture: ComponentFixture<NewsComponent>;
//   let apiService: ApiService;

//   beforeEach(async(() => {
//     const spy = jasmine.createSpyObj('ApiService', ['getNews']);
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule],
//       declarations: [NewsComponent],
//       providers: [
//         // replace ApiService with spy object as a dependency
//         {provide: ApiService, useValue: spy}
//       ]
//     }).compileComponents();
//     // inject Test ApiService in the TestBed 
//     apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
//     ApiService.getNews.and.returnValue(of({}));
//     apiService.propertySpy = spyOnProperty(articles, "myValue", "get").and.returnValue(1);
//     fixture = TestBed.createComponent(NewsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   afterAll(() => {
//     console.log(fixture);
//     console.log(component);
//   });

//   afterEach(() => {
//   });


//   it('#service should be Truthy', () => {
//     expect(apiService).toBeTruthy();
//   });

//   it('#fixture should be Truthy', () => {
//     expect(fixture).toBeTruthy();
//   });
//   it('#component should be Truthy', () => {
//     expect(component).toBeTruthy();
//   });
//   it('#service method should be called', () => {
//     expect(apiService.getNews).toHaveBeenCalled();
//   })

// });

fdescribe('NewsComponent: stub ApiService should create like before', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let service: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [NewsComponent],
      providers: [
        ApiService,
        HttpTestingController
        ]
    }).compileComponents();
    

    service = TestBed.inject(ApiService);
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
  }));

  afterAll(() => {
    console.log(fixture);
    console.log(component);
    console.log(service);
    console.log(component.articles);
    console.log(component.getMock);
    console.log(component.getMock());
  });

  afterEach(() => {
  });


  it('#service should be Truthy', () => {
    expect(service).toBeTruthy();
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
  });
  it('should return value "test', () => {
    spyOn(service, "getMock");
    // let result = component.getNews();
    expect(result).toEqual('test');
    expect(service.getMock).toHaveBeenCalled();
  })

});


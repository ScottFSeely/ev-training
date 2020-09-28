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

describe('getProducts', () => {
  let injector: TestBed;
  let myProvider: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    injector = getTestBed();
    myProvider = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });
  it('should return an Observable<Product[]>', () => {
    const someProducts = [
      { id: 1, name: 'Product001', cost: 10 , quantity: 100 },
      { id: 2, name: 'Product002', cost: 100, quantity: 200 },
      { id: 3, name: 'Product003', cost: 200, quantity: 300 }
    ];
    myProvider.getProducts().subscribe((products) => {
      expect(products.length).toBe(3);
      expect(products).toEqual(someProducts);
    });
  });
});
  

// fdescribe('NewsComponent: show/hide button', () => {

//     let component: NewsComponent;
//     let fixture: ComponentFixture<NewsComponent>;
//     let testBedService: ApiService;
//     // let apiServiceStub: ApiService;

//     const paragraphs = document.querySelectorAll("input");
    

//     beforeEach(async(() => {
      
//       TestBed.configureTestingModule({
//         declarations: [ NewsComponent ],
//         imports: [ 
//           HttpClientTestingModule,
//           HttpClientModule,
//           RouterTestingModule ],
//         providers: [ 
//           ApiService
//           // { provide: ApiService, useClass: FakeApiService }
//           // { provide: HttpClient, useClass: HttpClient}
//           ]
//       })
//       fakeApiService = TestBed.get(ApiService);
//       .compileComponents();
//     }));

//     beforeEach(async(() => {
      
//       TestBed.configureTestingModule({
//         declarations: [ NewsComponent ],
//         imports: [ 
//           HttpClientTestingModule,
//           HttpClientModule,
//           RouterTestingModule ],
//         providers: [ 
//           ApiService
//           // { provide: ApiService, useClass: FakeApiService }
//           // { provide: HttpClient, useClass: HttpClient}
//           ]
//       })
//       fakeApiService = TestBed.get(ApiService);
//       .compileComponents();
//     }));
    
//     beforeAll(() => {
//       fixture = TestBed.createComponent(NewsComponent);
//       component = fixture.componentInstance;
//       fixture.detectChanges();     
//     });

//     it('#fakeService should return json object', () => {
//       // expect(FakeApiService).toBe(5);
//     });

//     it('should show fake service', () => {
//       // expect(FakeApiService).toBe(5);
//       TestBed.inject([ApiService],(injectService: ApiService));
      
//       console.log(`fixture looks like: ${fixture}`);
//       console.log(`component looks like: ${component}`); 
//     });

//     it('should return faked values from fakeService', () => {
//       let index = 0;
//       const expected_titles = ["Fake article 1", "Fake article 2"]
//       // for (let article of component.getNews()) {
//       //   expect(article.title).toBe(expected_titles[index])
//       //   index++
//       // }
      
//     })
// });



// // describes the test and has a callback function
// xdescribe('NewsComponent', () => {

//   let component: NewsComponent;
//   let fixture: ComponentFixture<NewsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ NewsComponent ],

//     })
//     .compileComponents();
//   }));

//   beforeAll(() => {
//     fixture = TestBed.createComponent(NewsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   xit('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   xit("should display all articles", () => {
//     fail('no test written');
//   })

// });

// xdescribe("A sample suite with setup and teardown", function() {
//   var foo = 0;
//   beforeEach(function() {
//     foo += 1;
//     console.log(foo);
//   });
//   afterEach(function() {
//     foo = 0;
//     console.log(foo);
//   });
//   beforeAll(function() {
//     foo = 1;
//     console.log(foo);
//   });
//   afterAll(function() {
//     foo = 0;
//     console.log(foo);
//   });
// });
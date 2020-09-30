import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs';

import { NewsComponent } from './news.component';
import { ApiService } from '../api.service';
import { HttpTestingController } from '@angular/common/http/testing';

function AClass() {
  this.aFunction = function() {
    return "I did the thing";
  }
}

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  let apiService: jasmine.SpyObj<ApiService>;
  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ApiService', ['getNews']);
    // const testSpy1 = jasmine.createSpy('ApiService', ['getTranslations']);

    TestBed.configureTestingModule({
      declarations: [NewsComponent],
      imports: [HttpClientModule],
      // replace ApiService dependency with a spy 
      providers: [{ provide: ApiService, useValue: spy }],
    }).compileComponents();
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    apiService.getNews.and.returnValue(of({articles: 'test'}));
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterAll(() => {
    console.log(fixture);
    console.log(component);
  });

  afterEach(() => {
  });


  it('#service should be Truthy', () => {
    expect(apiService).toBeTruthy();
  });

  it('#fixture should be Truthy', async(() => {
    // wait for formControl
    fixture.whenStable().then(() => {
      expect(fixture).toBeTruthy();
    })
  }));
  it('#component should be Truthy', async(() => {
    // wait for formControl
    fixture.whenStable().then(() => {
      expect(component).toBeTruthy();
    })
  }));
  it('#service method should be called', () => {
    expect(apiService.getNews).toHaveBeenCalled();
  })
  it('should spy on somethings', () => {
    let spyFunctions = spyOnAllFunctions(component);
    console.log(spyFunctions);
    expect(spyFunctions).toBeDefined();
  })
  // it('should return "test" from spy function', fakeAsync(() => {
  //   let returnedVal: any;
  //   let Subscription = apiService.getNews().subscribe((result) => {
  //     returnedVal = result;
  //   });
  //   // expect(returnedVal).toEqual({articles: 'test'});
  //   // expect(returnedVal['articles']).toEqual('test');
  //   Subscription.unsubscribe(); // should this go inside of afterAll()? 
  // }))
  // it('should return "hello" from spy function', () => {
  //   let hola;
  //   console.log('Returned from getNews is: ',apiService.getNews().subscribe((result)=>{hola = result;}));
  //   expect(hola).toEqual({articles: 'test'});
  //   expect(hola['articles']).toEqual('test');
  // })

});

describe("should test jasmine concepts", () => {
  it("should create a spy on AFunction and use the fake function", () => {
    const fakeMessage = "I did the FAKE thing HAHA";
    var obj = new AClass();

    // creates a fake function called aFunction in object that is called "mySpy" 
    // and returns fakeMessage when called
    obj.aFunction = jasmine.createSpy("mySpy").and.returnValue(fakeMessage);
    console.log(obj.aFunction()); // call function
    expect(obj.aFunction).toHaveBeenCalled(); 
    expect(obj.aFunction()).toEqual(fakeMessage);
  })
});

// fdescribe('NewsComponent: stub ApiService should create like before', () => {
//   let component: NewsComponent;
//   let fixture: ComponentFixture<NewsComponent>;
//   let service: ApiService;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [],
//       declarations: [NewsComponent],
//       providers: [
//         ApiService,
//         HttpTestingController
//         ]
//     }).compileComponents();
    

//     service = TestBed.inject(ApiService);
//     fixture = TestBed.createComponent(NewsComponent);
//     component = fixture.componentInstance;
//   }));

//   afterAll(() => {
//     console.log(fixture);
//     console.log(component);
//     console.log(service);
//     console.log(component.articles);
//     console.log(component.getMock);
//     console.log(component.getMock());
//   });

//   afterEach(() => {
//   });


//   it('#service should be Truthy', () => {
//     expect(service).toBeTruthy();
//   });
//   it('#fixture should be Truthy', () => {
//     expect(fixture).toBeTruthy();
//   });
//   it('#component should be Truthy', () => {
//     expect(component).toBeTruthy();
//   });
//   it('#component should return articles', () => {
//     let articles = component.articles;
//     console.log(`Show me the articles! ${component.articles}`);
//     component.articles = "test";
//     console.log(`Show me the articles! ${component.articles}`);
//   });
//   it('should return value "test', () => {
//     spyOn(service, "getMock");
//     // let result = component.getNews();
//     expect(result).toEqual('test');
//     expect(service.getMock).toHaveBeenCalled();
//   })

// });


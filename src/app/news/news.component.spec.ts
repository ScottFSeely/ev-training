import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { of } from 'rxjs';

import { NewsComponent } from './news.component';
import { ApiService } from '../api.service';
import { HttpTestingController } from '@angular/common/http/testing';

function FakeFunction() {
  this.testThing1 = ''
}

// my notes on functions
let myAdd1 = function (x,y):number {
  return x+y;
}
let myAdd2: (x:number, y:number) => number = function (
  x: number,
  y: number
):number {
  return x+y;
};
let myAdd3 = (function(a:number, b:number){
  console.log(a+b)
  return a+b;
})(1,2);
// recursion
function sumOfSquares(num: number):number {
  let sum: number = Math.pow(num,2);
  if(num==1) {
    return 1
  }else{
    return sum + sumOfSquares(num-1) // calls itself
  }
}
// nesting functions
function convertToChicken(name: string) {
  function getChickenName(name: string) {
    return `Chicken ${name}`
  }
  return getChickenName(name);
  // 1. call convertToChicken(name)
  // 2. name goes into getChickenName(name) which is defined inside the function
  // 3. goes into `Chicken ${name}` gets returned.
  // can this function be used outside the function it is defined in?
} convertToChicken('Alfred');
// let and const are block-scoped
function convertToChickenAgain(name:string){
  let originalName = name;
  function getChickenName(newName:string){
    console.log(`originalName will still work in this scope. let and const can go in here. \n Original Name: ${originalName}`);
    return `Chicken ${newName}`;
  }
  return getChickenName(name);
} convertToChickenAgain("Peanut");
// function in object
const bird = {
  chirp: function() {
    // bird object will go in ${this}???
    console.log('chirp', this);
  }
}
const dog = {
  bark(){
    // dog object will go in ${this}???
    console.log('bark', this);
  }
}
const cat = {
  meow: () => {
    // will give an error bc ${this} is a globalThis value
    console.log('meow', this);
  }
}
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
    apiService.getNews.and.returnValue(of({articles: 'Test'}));
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

  it('#fixture should be Truthy', () => {
    expect(fixture).toBeTruthy();
  });
  it('#component should be Truthy', () => {
    expect(component).toBeTruthy();
  });
  it('#service method should be called', () => {
    expect(apiService.getNews).toHaveBeenCalled();
  })
  it('should spy on somethings', () => {
    let spyFunctions = spyOnAllFunctions(component);
    console.log(spyFunctions);
    expect(spyFunctions).toBeDefined();
  })
  it('should return "hello" from spy function', () => {
    console.log('Returned from getNews is: ',apiService.getNews());
    expect(apiService.getNews()['articles']).toEqual('Test');
  })

});

describe("should test jasmine concepts", () => {
  it("should create a spy on AFunction and use the fake function", () => {
    const fakeMessage = "I did the FAKE thing HAHA";
    var obj = new AClass();
    console.log(obj);
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


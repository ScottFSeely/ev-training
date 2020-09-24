import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { NewsComponent } from './news.component';
import { of } from 'rxjs';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';


describe('NewsComponent: show/hide button',() => {

    let component: NewsComponent;
    let fixture: ComponentFixture<NewsComponent>;
    // let apiServiceStub: ApiService;

    const paragraphs = document.querySelectorAll("input");
    

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ NewsComponent ],
          imports: [ 
            HttpClientTestingModule,
            HttpClientModule ],
          providers: [ 
            { provide: ApiService, useClass: FakeApiService }
            // { provide: HttpClient, useClass: HttpClient}
           ]
        })
        
        .compileComponents();
      }));
    
      beforeAll(() => {
        fixture = TestBed.createComponent(NewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('#fakeService should return json object', () => {
        // expect(FakeApiService).toBe(5);
      });

      it('should return faked values from fakeService', () => {
        let index = 0;
        const expected_titles = ["Fake article 1", "Fake article 2"]
        // for (let article of component.getNews()) {
        //   expect(article.title).toBe(expected_titles[index])
        //   index++
        // }
      })
});

class FakeApiService {
  
  fakeVal = 5;
  getNews() {
    const fakeNewsJson = {
      "status":"ok",
      "totalResults":38,
      "articles":[{
          "source":{
              "id":"fake-1",
              "name":"Fake 1"
            },
          "author":"Chris Welch",
          "title":"Fake article 1",
          "description":"Fake description 1",
          "url":"https://www.google.com",
          "urlToImage":"https://cdn.vox-cdn.com/thumbor/ojeUgo3ftd2A4u3THNHkUL4l3rA=/0x537:4608x2950/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21903921/0420DD31_1DBC_4C2C_B4BF_1368A98D1E2D.jpeg",
          "publishedAt":"2020-09-23",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }, {
          "source":{
              "id":"fake-2",
              "name":"Fake 2"
            },
          "author":"E Cooper",
          "title":"Fake article 2",
          "description":"Fake description 2",
          "url":"https://www.google.com",
          "urlToImage":"https://cdn.vox-cdn.com/thumbor/ojeUgo3ftd2A4u3THNHkUL4l3rA=/0x537:4608x2950/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21903921/0420DD31_1DBC_4C2C_B4BF_1368A98D1E2D.jpeg",
          "publishedAt":"2020-09-23",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }]
    };  
    return fakeNewsJson
  }
}


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
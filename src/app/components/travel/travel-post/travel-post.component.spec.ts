import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPostComponent } from './travel-post.component';

describe('TravelPostComponent', () => {
  let component: TravelPostComponent;
  let fixture: ComponentFixture<TravelPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

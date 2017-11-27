import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatakeenComponent } from './datakeen.component';

describe('DatakeenComponent', () => {
  let component: DatakeenComponent;
  let fixture: ComponentFixture<DatakeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatakeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatakeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

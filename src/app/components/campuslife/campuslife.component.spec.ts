import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampuslifeComponent } from './campuslife.component';

describe('CampuslifeComponent', () => {
  let component: CampuslifeComponent;
  let fixture: ComponentFixture<CampuslifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampuslifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampuslifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

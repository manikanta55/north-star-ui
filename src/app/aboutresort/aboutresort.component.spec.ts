import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutresortComponent } from './aboutresort.component';

describe('AboutresortComponent', () => {
  let component: AboutresortComponent;
  let fixture: ComponentFixture<AboutresortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutresortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutresortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

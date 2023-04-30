
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutoComponent } from './abouto.component';

describe('AboutComponent', () => {
  let component: AboutoComponent;
  let fixture: ComponentFixture<AboutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

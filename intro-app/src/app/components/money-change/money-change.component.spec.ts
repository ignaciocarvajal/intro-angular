import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyChangeComponent } from './money-change.component';

describe('MoneyChangeComponent', () => {
  let component: MoneyChangeComponent;
  let fixture: ComponentFixture<MoneyChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

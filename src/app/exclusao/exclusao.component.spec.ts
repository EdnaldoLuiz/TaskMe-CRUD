import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusaoComponente } from './exclusao.component';

describe('ExclusaoComponent', () => {
  let component: ExclusaoComponente;
  let fixture: ComponentFixture<ExclusaoComponente>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExclusaoComponente]
    });
    fixture = TestBed.createComponent(ExclusaoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarDesktopComponent } from './topbar-desktop.component';

describe('TopbarDesktopComponent', () => {
  let component: TopbarDesktopComponent;
  let fixture: ComponentFixture<TopbarDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

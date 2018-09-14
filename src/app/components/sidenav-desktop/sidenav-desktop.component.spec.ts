import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDesktopComponent } from './sidenav-desktop.component';

describe('SidenavDesktopComponent', () => {
  let component: SidenavDesktopComponent;
  let fixture: ComponentFixture<SidenavDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

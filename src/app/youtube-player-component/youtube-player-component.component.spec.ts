import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayerComponentComponent } from './youtube-player-component.component';

describe('YoutubePlayerComponentComponent', () => {
  let component: YoutubePlayerComponentComponent;
  let fixture: ComponentFixture<YoutubePlayerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlayerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { YoutubePlayerComponentComponent } from './youtube-player-component/youtube-player-component.component';

import { YtPlayerAngularModule } from '../../node_modules/yt-player';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NavigationBarComponent,
    YoutubePlayerComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    YtPlayerAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

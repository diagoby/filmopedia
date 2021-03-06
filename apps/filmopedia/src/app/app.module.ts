import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

import { AppRoutingModule } from './app-routing.module';
import { NebularUIModule } from './modules/nebular-ui.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MovieDurationPipe } from './core/movie-duration.pipe';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MoviePosterPipe } from './core/movie-poster.pipe';
import { GenreWallpaperPipe } from './core/genre-wallpaper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    MovieCardComponent,
    MovieDurationPipe,
    MoviePageComponent,
    MoviePosterPipe,
    GenreWallpaperPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbEvaIconsModule,
    NebularUIModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

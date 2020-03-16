import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoremIpsumComponent } from './components/lorem-ipsum.component';
import { SectionIntroComponent } from './components/section-intro/section-intro.component';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ScrollSpyDirective,
    LoremIpsumComponent,
    SectionIntroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

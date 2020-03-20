import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoremIpsumComponent } from './components/lorem-ipsum.component';
import { SectionContinuousImprovementComponent } from './components/section-continuous-improvement/section-continuous-improvement.component';
import { SectionCreationsComponent } from './components/section-creations/section-creations.component';
import { SectionFooterComponent } from './components/section-footer/section-footer.component';
import { SectionIntroComponent } from './components/section-intro/section-intro.component';
import { KnowledgeBlockComponent } from './components/section-knowledge/knowledge-block/knowledge-block.component';
import { KnowledgeItemComponent } from './components/section-knowledge/knowledge-item/knowledge-item.component';
import { SectionKnowledgeComponent } from './components/section-knowledge/section-knowledge.component';
import { SectionOtherComponent } from './components/section-other/section-other.component';
import { SectionTimelineComponent } from './components/section-timeline/section-timeline.component';
import { TimelineComponent } from './components/section-timeline/timeline/timeline.component';
import { ScrollSpyDirective } from './directives/scroll-spy.directive';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ScrollSpyDirective,
    LoremIpsumComponent,
    SectionIntroComponent,
    SectionFooterComponent,
    SectionTimelineComponent,
    TimelineComponent,
    SectionKnowledgeComponent,
    KnowledgeItemComponent,
    KnowledgeBlockComponent,
    SectionCreationsComponent,
    SectionContinuousImprovementComponent,
    SectionOtherComponent
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

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as AOS from 'aos';
import { ScrollSpyService } from './services/scroll-spy.service';

interface SectionMenuItem {
  id: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  currentSection = 'intro';
  sidenavOpened: boolean;
  sections: SectionMenuItem[] = [
    {id: 'timeline', title: 'Timeline'},
    {id: 'knowledge', title: 'Conocimientos'},
    {id: 'creations', title: 'Creaciones'},
    {id: 'continuous-improvement', title: 'Mejora continua'},
    {id: 'other', title: 'Más'},
  ];

  constructor(private scrollSpyService: ScrollSpyService) {

  }

  ngOnInit(): void {
    this.scrollSpyService.sectionChange.subscribe(this.onSectionChange);
    AOS.init();
    /*
    let scrollRef = 0;
    document.getElementById('content-scroll').addEventListener('scroll', () => {
      scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
    setTimeout(() => {
      AOS.refresh();
    }, 500);*/
  }

  onSectionChange = (sectionId: string) => {
    this.currentSection = sectionId;
    history.replaceState(undefined, undefined, '#' + sectionId);
  }

  scrollTo(section) {
    this.sidenav.close();
    const hash = '#' + section;
    document.querySelector(hash).scrollIntoView({ behavior: 'smooth'});
    history.replaceState(undefined, undefined, hash);
  }
}

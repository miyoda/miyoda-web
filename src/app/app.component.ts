import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as AOS from 'aos';

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


  ngOnInit(): void {
    AOS.init();
    let scrollRef = 0;

    document.getElementById('content-scroll').addEventListener('scroll', () => {
      scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    this.sidenav.close();
    document.querySelector('#' + section).scrollIntoView({ behavior: 'smooth'});
  }
}

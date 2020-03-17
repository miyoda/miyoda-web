import { Component, OnInit } from '@angular/core';
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
  currentSection = 'intro';
  sidenavOpened: boolean;
  sections: SectionMenuItem[] = [
    {id: 'timeline', title: 'Timeline'},
    {id: 'section2', title: 'Section 2'},
    {id: 'section3', title: 'Section 3'},
    {id: 'section4', title: 'Section 4'},
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
    document.querySelector('#' + section).scrollIntoView({ behavior: 'smooth'});
  }
}

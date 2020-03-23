import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ScrollSpyService {
    public sectionChange = new EventEmitter<string>();

    private currentSection: string;

    // tslint:disable-next-line:variable-name
    constructor() {
        window.addEventListener('scroll', this.onScroll);
    }

    onScroll = (event: any) => {
        let currentSection: string;
        const sections = document.getElementsByClassName('section-spy');
        const parentOffset = document.documentElement.scrollTop || document.body.scrollTop;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if ((section as HTMLDivElement).offsetTop <= parentOffset) {
                currentSection = section.id;
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    };

}

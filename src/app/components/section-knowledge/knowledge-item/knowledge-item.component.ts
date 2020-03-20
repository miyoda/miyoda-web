import { Component, Input, OnInit } from '@angular/core';


export interface KnowledgeItem {
  name: string;
  img: string;
  expert: boolean;
  url: string;
}

@Component({
  selector: 'app-knowledge-item',
  templateUrl: './knowledge-item.component.html',
  styleUrls: ['./knowledge-item.component.scss']
})
export class KnowledgeItemComponent implements OnInit {

  @Input()
  knowledge: KnowledgeItem;

  constructor() { }

  ngOnInit(): void {
  }

  open(url: string) {
    window.open(url, '_blank');
  }

}

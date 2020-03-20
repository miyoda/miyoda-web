import { Component, Input, OnInit } from '@angular/core';
import { KnowledgeItem } from '../knowledge-item/knowledge-item.component';

@Component({
  selector: 'app-knowledge-block',
  templateUrl: './knowledge-block.component.html',
  styleUrls: ['./knowledge-block.component.scss']
})
export class KnowledgeBlockComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  items: KnowledgeItem[];

  constructor() { }

  ngOnInit(): void {
  }

}

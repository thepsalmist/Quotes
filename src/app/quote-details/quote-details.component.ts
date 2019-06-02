import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() deleteEvent = new EventEmitter();

  upVote = 0;
  downVote = 0;

  likes() {
    this.upVote += 1;
  }
  dislikes() {
    this.downVote += 1;
  }

  callParentDelete(status: boolean) {
    //alert('Delete Quote')
    this.deleteEvent.emit(status);
  }

  constructor() { }

  ngOnInit() {
  }

}

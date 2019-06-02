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

  likes() {
    this.quote.vote++
  }
  dislikes() {
    this.quote.vote--
  }
  // upVote = this.likes(1);
  // downVote = this.dislikes(1);


  callParentDelete(status: boolean) {
    //alert('Delete Quote')
    this.deleteEvent.emit(status);
  }

  constructor() { }

  ngOnInit() {
  }

}

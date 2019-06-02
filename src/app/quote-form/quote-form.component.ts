import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {


  newQuote = new Quote(1, '', '', '', new Date(), 0);
  @Output() newQuoteEvent = new EventEmitter();

  //newQuotes = quotes.push(this.newQuote);

  onSubmit() {
    console.log('new quote added');
    console.log(this.newQuote)
    this.newQuoteEvent.emit(this.newQuote);
    this.newQuote = new Quote(1, '', '', '', new Date(), 0);

  }
  constructor() { }

  ngOnInit() {
  }

}

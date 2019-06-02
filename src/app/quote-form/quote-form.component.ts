import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {


  newQuote = new Quote('The greatest stuff lives here', 'xavier', 'gianis', new Date());
  //newQuotes = quotes.push(this.newQuote);

  onSubmit() {
    console.log(this.newQuote);
  }
  constructor() { }

  ngOnInit() {
  }

}

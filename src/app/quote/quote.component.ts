import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('The best quote is ', 'Xavier', 'xavier', new Date()),
    new Quote('The best quote is ', 'Xavier', 'xavier', new Date()),
    new Quote('The best quote is ', 'Xavier', 'xavier', new Date()),

  ]

  constructor() { }

  ngOnInit() {
  }

}

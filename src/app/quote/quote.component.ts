import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  //create an array of instances of class Quote
  quotes = [
    new Quote('', '', '', new Date()),

  ]
  newQuote = new Quote('', '', '', new Date());
  constructor() { }

  ngOnInit() {
  }

}
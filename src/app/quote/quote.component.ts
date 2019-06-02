import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  //create an array of instances of class Quote
  quotes = [];

  showQuoteDetails(index) {
    this.quotes[index].quoteDescription = !this.quotes[index].quoteDescription
  }
  delete(deleteEvent, index) {
    if (deleteEvent) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

    }
  }
  constructor() { }

  ngOnInit() {
  }

}

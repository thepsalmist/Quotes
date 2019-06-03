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
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }
  mostLikes(index) {
    let voteCheck = this.quotes[index].vote;
    if (this.quotes.length > 0) {
      let votes = [];
      this.quotes.forEach(quote => votes.push(quote.vote))
      if (voteCheck === Math.max(...votes)) { return true; }
    }

  }
  constructor() { }

  ngOnInit() {
  }

}

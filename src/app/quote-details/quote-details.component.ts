import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;

  callParentDelete() {
    alert('Delete Quote')
  }

  constructor() { }

  ngOnInit() {
  }

}

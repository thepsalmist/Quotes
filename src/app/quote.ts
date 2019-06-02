export class Quote {
  //update properties of class Quote
  public quoteDescription: boolean;
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public person: string,
    public date: Date) { this.quoteDescription = false }
}

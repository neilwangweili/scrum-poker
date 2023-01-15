export class Cards {
  public readonly cards: Array<Card>;
  public singleCardVisible = false;
  public current: Card;

  constructor() {
    this.cards = [new Card("0", 'rgb(125, 170, 109)', 400),
      new Card("1/2", 'rgb(125, 170, 109)', 200),
      new Card("1", 'rgb(125, 170, 109)', 400),
      new Card("2", 'rgb(125, 170, 109)', 400),
      new Card("3", 'rgb(75, 109, 186)', 400),
      new Card("5", 'rgb(75, 109, 186)', 400),
      new Card("8", 'rgb(213, 137, 71)', 400),
      new Card("13", 'rgb(213, 137, 71)', 200),
      new Card("20", 'rgb(199, 79, 66)', 200),
      new Card("40", 'rgb(199, 79, 66)', 200),
      new Card("100", 'rgb(199, 79, 66)', 150),
      new Card("?", 'rgb(199, 79, 66)', 400),
      new Card("∞", 'rgb(199, 79, 66)', 350),
      new Card("Coffee", 'rgb(199, 79, 66)', 100),
      new Card("Not Ready", 'rgb(199, 79, 66)', 100)
    ];
    this.current = new Card('', '', 0);
  }
}

export class Card {
  public readonly point: string;
  public readonly backgroundColor: string;
  public readonly fontSize: number;


  constructor(point: string, backgroundColor: string, fontSize: number) {
    this.point = point;
    this.backgroundColor = backgroundColor;
    this.fontSize = fontSize;
  }
}

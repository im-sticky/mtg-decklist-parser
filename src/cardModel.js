export class CardModel {
  constructor(rawInput) {
    const {amount, name, set, collectorNumber} = this.parse(rawInput);

    this.name = name;
    this.amount = amount;
    this.set = set;
    this.collectorNumber = collectorNumber;
  }

  parse(rawInput) {


    return {
      name: '',
      amount: 0,
      set: '',
      collectorNumber: 0,
    }
  }
}
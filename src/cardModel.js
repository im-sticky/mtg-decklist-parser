const _amountRegex = /^\d+/;
const _collectorRegex = /\d+$/;
const _setRegex = /(\(|\[)(.+)(\)|\])/;

export class CardModel {
  constructor(rawInput) {
    const {amount, name, set, collectors, mtgoID} = typeof rawInput === 'string' ?
      this.parseString(rawInput) :
      this.parseObject(rawInput);

    this.name = name;
    this.amount = amount;
    this.set = set;
    this.collectors = collectors;
    this.mtgoID = mtgoID;
  }

  parseString(rawInput) {
    rawInput.trim();

    const name = rawInput.replace(_amountRegex, '').replace(_setRegex, '').replace(_collectorRegex, '').trim();
    const amount = rawInput.match(_amountRegex);
    const set = rawInput.match(_setRegex);
    const collectors = rawInput.match(_collectorRegex);

    return {
      name,
      amount: amount ? parseInt(amount) : undefined,
      // set code will be in second matched group
      set: set ? set[2] : undefined,
      collectors: collectors ? parseInt(collectors) : undefined,
    }
  }

  parseObject(rawInput) {
    return {
      name: rawInput.Name,
      amount: parseInt(rawInput.Quantity),
      mtgoID: rawInput.CatID,
    };
  }
}
import parser from 'fast-xml-parser';
import {CardModel} from './cardModel';
import {Deck} from './deck';

const _commanderAnnotation = '16777728';

export class MTGO extends Deck {
  constructor(xml, logError = true) {
    super();

    xml = xml.trim();

    const output = parser.validate(xml);

    this.valid = output === true;

    if (this.valid) {
      const parsed = parser.parse(xml, {
        attributeNamePrefix: '',
        ignoreAttributes : false,
      });

      parsed.Deck.Cards.forEach(card => {
        if (card.Annotation === _commanderAnnotation) {
          this.commander = new CardModel(card);
        } else if (card.Sideboard === 'true') {
          this.sideboard.push(new CardModel(card));
        } else {
          this.deck.push(new CardModel(card));
        }
      });
    } else if (logError) {
      console.error(output.err);
    }
  }
}
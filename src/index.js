import {Decklist} from './decklist';
import {MTGO} from './mtgo';

export {Decklist, MTGO};

export function autoParse(rawInput) {
  const deck = new MTGO(rawInput, false);

  return deck.valid ? deck : new Decklist(rawInput);
}
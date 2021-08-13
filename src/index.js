import {ClassModel} from './cardModel';

export function parse(rawInput) {
  let splitData = rawInput.trim().split(/\n/g);

console.log(splitData)

  return splitData;
}

# MTG decklist parser
Library for parsing MTG Online &amp; Arena decklists

## Installation

The library is available as a package on npm. Currently there is no static location for a production file to hotlink to.

```
npm install mtg-decklist-parser --save
```

After that import the `Decklist` class from the library. This is where all parsing is done. Just pass your decklist string into the constructor of the class.

```js
import {Decklist} from 'mtg-decklist-parser';

let parsed = new Decklist(rawString);
```

If manually building the library to include in your project, the `Decklist` class will be available in the `MTGParser` global object.

```js
let parsed = new MTGParser.Decklist(rawString);
```

## API documentation

Decklists to be given to the parser follow the conventional newline separated format that can be found on many popular sites such as [MTGGoldfish](https://www.mtggoldfish.com/). Supports lists exported from MTG Arena and MTGO `.dek` files. There are multiple example decklists in the [example folder](example).

### Decklist & MTGO

Both the `Decklist` and `MTGO` classes share the same properties. Both expect strings passed into their constructor.

| Property | Type | Description |
|---|---|---|
| valid | Boolean | If the parsing of the decklist was successful. Note: this does not necessarily mean the input was well formed. |
| deck | Array | An array of `CardModel` for the main deck. |
| sideboard | Array | An array of `CardModel` for the sideboard. |
| companion | CardModel | If a companion is specified in the input will be available, otherwise null. |
| commander | CardModel | If a commander is specified in the input will be available, otherwise null. |

### CardModel

_Note: This is used internally and not publicly exposed._

| Property | Type | Optional | Description |
|---|---|---|---|
| name | String | False | The name of the card specified within the deck. |
| amount | Number | False | The amount of the card specified within the deck. |
| set | String | True | The set code of the card. |
| collectors | Number | True | The collector number of the card within the specific set. |
| mtgoID | String | True | The ID of the card specific to MTG Online. |

### Dev setup

To get the project up and running with a test page and hot reloading, clone the repo and run the following:

```
npm install
npm start
```

To build the project for production code:

```
npm build
```

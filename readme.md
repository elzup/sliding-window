# sliding-window

> A TypeScript utility for creating sliding windows over arrays

## Install

```
$ npm install sliding-window
```

## Doc

[./src/\_\_test\_\_](./src/__test__)

## Usage

```js
import { slidingWindow } from 'sliding-window'

// Default window size is 2
slidingWindow([1, 2, 3, 4])
// [[1, 2], [2, 3], [3, 4]]

// Custom window size
slidingWindow([1, 2, 3, 4, 5, 6], 3)
// [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6]]
```

## License

MIT © [anozon](https://anozon.me)

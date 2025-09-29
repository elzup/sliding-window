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
import { windowed } from 'sliding-window'
windowed([1, 2, 3, 4], 2)
// [[1, 2], [2, 3], [3, 4]]

// with size
windowed([1, 2, 3, 4, 5, 6], 3)
// [ [1, 2, 3],
//   [2, 3, 4],
//   [3, 4, 5],
//   [4, 5, 6] ]
```

## License

MIT © [anozon](https://anozon.me)

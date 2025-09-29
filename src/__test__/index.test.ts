import { slidingWindow } from '../index'

describe('slidingWindow', () => {
  it('should work with size 2 (default)', () => {
    expect(slidingWindow([1, 2])).toStrictEqual([[1, 2]])
    expect(slidingWindow([1, 2, 3])).toStrictEqual([
      [1, 2],
      [2, 3],
    ])
    expect(slidingWindow([])).toStrictEqual([])
    expect(slidingWindow([1])).toStrictEqual([])
  })

  it('should work with size 3', () => {
    expect(slidingWindow([1, 2, 3, 4, 5, 6], 3)).toStrictEqual([
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
      [4, 5, 6],
    ])
  })

  it('should handle edge cases', () => {
    expect(slidingWindow([], 2)).toStrictEqual([])
    expect(slidingWindow([1], 2)).toStrictEqual([])
    expect(slidingWindow([1, 2, 3], 5)).toStrictEqual([])
  })
})

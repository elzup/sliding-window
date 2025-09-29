function slidingWindow2<T>(a: readonly T[]): [T, T][] {
  if (a.length < 2) return []

  return a.slice(0, -1).map((v, i) => [v, a[i + 1]!])
}

export function slidingWindow<T>(a: readonly T[], n = 2): T[][] {
  if (a.length < n) return []
  if (n === 2) return slidingWindow2(a)

  const b = a.slice(n - 1, a.length)

  return b.map((_v, i) => a.slice(i, i + n))
}

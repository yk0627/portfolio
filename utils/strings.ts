export const ellipsis = (str: string, len: number) =>
  str.length > len ? str.slice(0, len) + "..." : str

export const countCharacters = (...strings: string[]) =>
  strings.reduce((acc, str) => acc + str.length, 0)

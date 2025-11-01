export function strawberry(character: string, string: string, caseSensitive?: boolean): number {
  const stringArray = caseSensitive ? string.split('') : string.toLowerCase().split('');
  return stringArray.filter((char) => char === (caseSensitive ? character : character.toLowerCase())).length;
}
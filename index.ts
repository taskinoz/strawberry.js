/**
 * Counts the occurrences of a character in a string.
 * @param character - The character to count.
 * @param string - The string to search.
 * @param caseSensitive - Whether the search should be case sensitive.
 * @returns The number of occurrences of the character in the string.
 * @example
 * ```ts
 * import strawberry from "@taskinoz/strawberryjs";
 * const count = strawberry("r", "strawberry");
 * console.log(count); // 3
 * ```
 */
export default function strawberry(character: string, string: string, caseSensitive?: boolean): number {
  const stringArray = caseSensitive ? string.split('') : string.toLowerCase().split('');
  return stringArray.filter((char) => char === (caseSensitive ? character : character.toLowerCase())).length;
}
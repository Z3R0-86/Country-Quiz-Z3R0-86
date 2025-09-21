/**
 * Generate an array of numbers from 1 to max (inclusive)
 * @param max The maximum number in the range
 * @returns Array of numbers [1, 2, 3, ..., max]
 */
export function range(max: number): number[] {
  return Array.from({ length: max }, (_, i) => i + 1);
}
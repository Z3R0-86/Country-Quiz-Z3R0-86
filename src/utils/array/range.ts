/**
 * Genera una matriz de números desde 1 hasta un número max (inclusive)
 * @param max El numero máximo en el rango
 * @returns Matriz de números [1, 2, 3, ..., max]
 */
export function range(max: number): number[] {
  return Array.from({ length: max }, (_, i) => i + 1);
}
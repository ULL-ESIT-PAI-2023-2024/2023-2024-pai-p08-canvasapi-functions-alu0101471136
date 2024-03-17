/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * @fileoverview Function interface file
 * @author Raúl Álvarez alu0101471136@ull.edu.es
 * @since Mar 17 2024  
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

/**
 * @class - Interface that represents a function
 */
export interface Function {
  /**
   * Method that returns the result of the function
   * @param valueInX - The value in x to evaluate the function
   * @returns - The result of the function
   */
  evaluate(valueInX: number): number;
}
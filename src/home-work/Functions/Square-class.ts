/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * @fileoverview Square root class file
 * @author Raúl Álvarez alu0101471136@ull.edu.es
 * @since Mar 17 2024  
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

import { Function } from './Function-interface.js';

/**
 * @class - Class that represents a square root function
 */
export class SquareRoot implements Function {
  private functionName: string;

  /**
   * @constructor
   */
  constructor() {
    this.functionName = 'sqrt';
  }

  /**
   * Method that returns the result of the function
   * @returns - The result of the function
   */
  public evaluate(valueInX: number): number {
    return Math.sqrt(valueInX);
  }

  /**
   * Returns the name of the function
   * @returns - The name of the function
   */
  public getName(): string {
    return this.functionName;
  }
}
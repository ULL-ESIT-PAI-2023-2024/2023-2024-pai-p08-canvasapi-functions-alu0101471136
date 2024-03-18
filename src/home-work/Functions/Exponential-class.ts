/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * @fileoverview Exponential class file
 * @author Raúl Álvarez alu0101471136@ull.edu.es
 * @since Mar 17 2024  
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

import { Function } from './Function-interface.js';

/**
 * @class - Class that represents an exponential function
 */
export class Exponential implements Function {
  private functionName: string;

  /**
   * @constructor
   */
  constructor() {
    this.functionName = 'exp';
  }

  /**
   * Method that returns the result of the function
   * @returns - The result of the function
   */
  public evaluate(valueInX: number): number {
    return Math.exp(valueInX);
  }

  /**
   * Returns the name of the function
   * @returns - The name of the function
   */
  public getName(): string {
    return this.functionName;
  }
}
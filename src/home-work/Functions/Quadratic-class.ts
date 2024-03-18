/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * @fileoverview Quadratic class file
 * @author Raúl Álvarez alu0101471136@ull.edu.es
 * @since Mar 17 2024  
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

import { Function } from './Function-interface.js';

/**
 * @class - Class that represents a quadratic function
 */
export class Quadratic implements Function {
  private degreeTwoCoeficent: number;
  private degreeOneCoeficent: number;
  private independentTerm: number;
  private functionName: string;

  /**
   * @constructor
   * @param degreeTwoCoeficent - The a coefficient of the quadratic function
   * @param degreeOneCoeficent - The b coefficient of the quadratic function
   * @param independentTerm - The c coefficient of the quadratic function
   */
  constructor(degreeTwoCoeficent: number, degreeOneCoeficent: number, independentTerm: number) {
    if (degreeTwoCoeficent === 0) {
      throw new Error('The degree two coefficient cannot be 0');
    }
    this.degreeTwoCoeficent = degreeTwoCoeficent;
    this.degreeOneCoeficent = degreeOneCoeficent;
    this.independentTerm = independentTerm;
    this.functionName = 'quadratic';
  }

  /**
   * Method that returns the result of the function
   * @param valueInX - The value in x to evaluate the function
   * @returns - The result of the function
   */
  public evaluate(valueInX: number): number {
    return (this.degreeTwoCoeficent * valueInX * valueInX) + (this.degreeOneCoeficent * valueInX) + this.independentTerm;
  }

  /**
   * Returns the name of the function
   * @returns - The name of the function
   */
  public getName(): string {
    return this.functionName;
  }
}
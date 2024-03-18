/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * @fileoverview Cosine class file
 * @author Raúl Álvarez alu0101471136@ull.edu.es
 * @since Mar 17 2024  
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

import { Function } from './Function-interface.js';

/**
 * @class - Class that represents a cosine function
 */
export class Cosine implements Function {
  private amplitude: number;
  private frequency: number;
  private phase: number;  
  private functionName: string;              

  /**
   * @constructor
   * @param amplitude - The amplitude of the cosine function
   * @param frequency - The frequency of the cosine function
   * @param phase - The phase of the cosine function
   * @param verticalDisplacement - The vertical displacement of the cosine function
   */
  constructor(amplitude: number, frequency: number, phase: number) {
    this.amplitude = amplitude; 
    this.frequency = frequency;
    this.phase = phase;
    this.functionName = 'cos';
  }

  /**
   * Method that returns the result of the function
   * @returns - The result of the function
   */
  public evaluate(valueInX: number): number {
    return this.amplitude * Math.cos(this.frequency * valueInX + this.phase);
  }

  /**
   * Returns the name of the function
   * @returns - The name of the function
   */
  public getName(): string {
    return this.functionName;
  }
}
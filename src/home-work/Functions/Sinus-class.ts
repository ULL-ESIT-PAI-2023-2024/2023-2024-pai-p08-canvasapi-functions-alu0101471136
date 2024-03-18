/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * @fileoverview Sinus class file
 * @author Raúl Álvarez alu0101471136@ull.edu.es
 * @since Mar 17 2024  
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

import { Function } from './Function-interface.js';

/**
 * @class - Class that represents a sinus function
 */
export class Sinus implements Function {
  private amplitude: number;
  private frequency: number;
  private phase: number; 
  private functionName: string;               

  /**
   * @constructor
   * @param amplitude - The amplitude of the sinus function
   * @param frequency - The frequency of the sinus function
   * @param phase - The phase of the sinus function
   * @param verticalDisplacement - The vertical displacement of the sinus function
   */
  constructor(amplitude: number, frequency: number, phase: number) {
    this.amplitude = amplitude; 
    this.frequency = frequency;
    this.phase = phase;
    this.functionName = 'sin';
  }

  /**
   * Method that returns the result of the function
   * @returns - The result of the function
   */
  public evaluate(valueInX: number): number {
    return this.amplitude * Math.sin(this.frequency * valueInX + this.phase);
  }

  /**
   * Returns the name of the function
   * @returns - The name of the function
   */
  public getName(): string {
    return this.functionName;
  }
}
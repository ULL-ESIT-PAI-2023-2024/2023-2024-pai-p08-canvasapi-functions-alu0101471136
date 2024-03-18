/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * @fileoverview View class file
 * @author Raúl Álvarez alu0101471136@ull.edu.es
 * @since Mar 17 2024  
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

import { Function } from './Function-interface.js';

/**
 * @class - Class that represents the View
 */
export class View {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private axisSeparation: number = 40;

  /**
   * @constructor
   * @property canvas - The canvas to draw the axis and functions
   * @property context - The context of the canvas
   */
  constructor() {
    this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.drawAxis();    
  }

  /**
   * Method that draws the axis in the canvas
   * @returns - Void
   */
  private drawAxis() {
    this.context.beginPath();
    this.context.moveTo(0, this.canvas.height / 2);
    this.context.lineTo(this.canvas.width, this.canvas.height / 2);
    this.context.moveTo(this.canvas.width / 2, 0);
    this.context.lineTo(this.canvas.width / 2, this.canvas.height);
    this.context.stroke();
    this.drawGridLines();
  }
  
  /**
   * Method that draws the grid lines
   * @returns - Void
   */
  private drawGridLines() {
    this.context.save();
    this.context.setLineDash([2, 4]);
    this.context.lineWidth = 0.5;

    // Draw vertical grid lines
    const rangeX = this.canvas.width / 2 / this.axisSeparation;
    for (let x = -rangeX; x <= rangeX; x++) {
      const pixelX = this.canvas.width / 2 + x * this.axisSeparation;
      this.context.beginPath();
      this.context.moveTo(pixelX, 0);
      this.context.lineTo(pixelX, this.canvas.height);
      this.context.stroke();
      if (x !== 0) {
        this.context.fillText(x.toString(), pixelX, this.canvas.height / 2 + 20);
      }
    }

    // Draw horizontal grid lines
    const rangeY = this.canvas.height / 2 / this.axisSeparation;
    for (let y = -rangeY; y <= rangeY; y++) {
      const pixelY = this.canvas.height / 2 - y * this.axisSeparation;
      this.context.beginPath();
      this.context.moveTo(0, pixelY);
      this.context.lineTo(this.canvas.width, pixelY);
      this.context.stroke();
      if (y !== 0) {
        this.context.fillText(y.toString(), this.canvas.width / 2 + 20, pixelY);
      }
    }
    this.context.restore();
  }

  /**
   * Draws the function in the canvas
   * @param functionChosed - The function to draw
   * @returns - Void
   */
  drawFunction(functionChosed: Function) {
    // Clear the canvas
    if (this.context === null) {
      throw new Error('Context is null');
    }
    this.context.beginPath(); // Iniciar un nuevo trazo
    for (let x = 0; x < this.canvas.width; x++) {
      const xValue = (x - this.canvas.width / 2) / 40;
      const yValue = functionChosed.evaluate(xValue);
      const y = this.canvas.height / 2 - yValue * 40;
      if (x === 0) this.context.moveTo(x, y);
      else this.context.lineTo(x, y);
    }
    this.context.stroke(); // Finalizar y dibujar el trazo
  }
}
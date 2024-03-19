/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 * @fileoverview Here is declared the randomShapesGenerator 
 *     function that generates a random number of shapes.
 * @author Raúl Álvarez alu0101471136@ull.edu.es
 * @since Mar 17 2024  
 * @see {@link https://google.github.io/styleguide/tsguide.html}
 */

import { Sinus } from "./Functions/Sinus-class.js";
import { Cosine } from "./Functions/Cosine-class.js";
import { Quadratic } from "./Functions/Quadratic-class.js";
import { Exponential } from "./Functions/Exponential-class.js";
import { SquareRoot } from "./Functions/Square-class.js";
import { View } from "./Functions/View-class.js";

const test = function(): void {
  const axis = new View();
  const functionType: string = 'sinus';
  switch (functionType) {
    case 'sinus':
      const sinusFunction = new Sinus(2, 5, 0);
      axis.drawFunction(sinusFunction);
      break;
    case 'cosine':
      const cosineFunction = new Cosine(1, 0.1, 0);
      axis.drawFunction(cosineFunction);
      break;
    case 'quadratic':
      const quadraticFunction = new Quadratic(1, 0, 0);
      axis.drawFunction(quadraticFunction);
      break;

    case 'exponential': 
      const exponentialFunction = new Exponential();
      axis.drawFunction(exponentialFunction);
      break;

    case 'squareRoot': 
      const squareRootFunction = new SquareRoot();
      axis.drawFunction(squareRootFunction);
      break;

    default:
      break;
  }
} 

test();
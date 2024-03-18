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

// import { Sinus } from "./Functions/Sinus-class.js";
// import { Cosine } from "./Functions/Cosine-class.js";
// import { Quadratic } from "./Functions/Quadratic-class.js";
// import { Exponential } from "./Functions/Exponential-class.js";
import { SquareRoot } from "./Functions/Square-class.js";
import { View } from "./Functions/View-class.js";

const test = function(): void {
  const axis = new View();
  // const sinusFunction = new Sinus(2, 5, 0);
  // const cosineFunction = new Cosine(1, 0.1, 0, verticalStart);
  // const quadraticFunction: Quadratic = new Quadratic(1, 6, 8);
  // const exponentialFunction: Exponential = new Exponential(verticalStart);
  const squareRootFunction: SquareRoot = new SquareRoot();
  axis.drawFunction(squareRootFunction);
} 

test();
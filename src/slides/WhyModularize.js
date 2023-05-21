import React from 'react';
import monolithFirst from '../images/monolith_first.png';
import modularMonolith from '../images/modular_monolith.webp';

function WhyModularize() {
  return (
    <section>
      <section>
        <h3>Por qué modularizar?</h3>
      </section>

      <section>
        <h3>Monolito</h3>

        <blockquote>
          A software system is called &quot;monolithic&quot; if it has a monolithic architecture,
          in which functionally distinguishable aspects (for example data input and output,
          data processing, error handling, and the user interface) are all interwoven,
          rather than containing architecturally separate components.
        </blockquote>
        <p>
          src:
          <a href="https://en.wikipedia.org/wiki/Monolithic_system"> Wikipedia</a>
        </p>
      </section>

      <section>
        <h3>Problemas con los monolitos</h3>

        <ul>
          <li>
            Acomplamiento
            <ul>
              <li>Flaky tests</li>
            </ul>
          </li>
          <li>
            Ownership
            <ul>
              <li>Quién se hace cargo si se rompe algo?</li>
            </ul>
          </li>
          <li>
            Complejidad de codebase
            <ul>
              <li>Curva de aprendizaje muy alta para nuevos devs</li>
            </ul>
          </li>
          <li>Tiempo de ejecución de CI</li>
          <li><b>Productividad y felicidad de los desarrolladores</b></li>
        </ul>
      </section>

      <section>
        <h3>Monolitos modulares</h3>

        <p>
          Un monolito modular es un sistema en el que todo el código alimenta una sola aplicación
          y existen límites estrictamente impuestos entre los diferentes dominios.
        </p>

        <img src={modularMonolith} alt="Modular Monolith" loading="lazy" />

      </section>

      <section>
        <p>
          <a href="https://martinfowler.com/bliki/MonolithFirst.html">Martin Fowler MonolithFirst</a>

          <img src={monolithFirst} alt="Monolith First" loading="lazy" />
        </p>
      </section>

    </section>
  );
}

export default WhyModularize;

import React from 'react';

function WrapUp() {
  return (
    <section>
      <section>
        <h3>Conclusiones</h3>
      </section>

      <section>
        <h3>Problemas con los monolitos</h3>
        <ul>
          <li>
            Acoplamiento
            <ul>
              <li>Tiempo de ejecución de CI</li>
            </ul>
          </li>
          <li>
            Ownership
            <ul>
              <li>Quién se hace cargo si se rompe algo?</li>
              <li>Flaky tests</li>
            </ul>
          </li>
          <li>
            Complejidad de codebase
            <ul>
              <li>Curva de aprendizaje muy alta para nuevos devs</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h3>Takeaways</h3>

        <ul>
          <li>Cuando vale la pena modularizar depende de cada proyecto</li>
          <li>Packwerk es una gema liviana y es fácil volver atrás</li>
          <li>Establecer los límites es complejo, pero es un problema de diseño del software</li>
        </ul>
      </section>

      <section>
        <h3>Preguntas?</h3>
      </section>

      <section>
        <h3>Gracias!</h3>
      </section>
    </section>
  );
}

export default WrapUp;

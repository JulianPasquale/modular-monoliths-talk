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
        <h3>Recursos adicionales</h3>

        <ul>
          <li>
            <a href="https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90">
              AWS - Scaling up the Prime Video audio/video monitoring service
              and reducing costs by 90%
            </a>
          </li>

          <li>
            <a href="https://world.hey.com/dhh/even-amazon-can-t-make-sense-of-serverless-or-microservices-59625580">
              Even Amazon can&apos;t make sense of serverless or microservices
            </a>
          </li>
          <li>
            <a href="https://engineering.gusto.com/a-how-to-guide-to-ruby-packs-gustos-gem-ecosystem-for-modularizing-ruby-applications/">
              A How-to Guide to Ruby Packs, Gusto&apos;s Gem Ecosystem
              for Modularizing Ruby Applications
            </a>
          </li>
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

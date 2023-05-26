import React from 'react';
import monolithFirst from '../images/whyModularize/monolith_first.png';
import modularMonolith from '../images/whyModularize/modular_monolith.webp';
import presentationDomainData from '../images/whyModularize/presentation_domain_data.png';
import presentationDomainDataExtended from '../images/whyModularize/presentation_domain_data_extended.png';
import presentationDomainDataModularized from '../images/whyModularize/presentation_domain_data_modularized.png';
import domainDrivenDesign from '../images/whyModularize/domain_driven_design_book.jpg';
import boundedContexts from '../images/whyModularize/bounded_contexts.png';

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
              <li>Tiempo de ejecución de CI</li>
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
          <li><b>Productividad y felicidad de los desarrolladores</b></li>
        </ul>
      </section>

      <section>
        <h3>
          <a href="https://martinfowler.com/bliki/PresentationDomainDataLayering.html">Presentation-Domain-Data Layering</a>
        </h3>

        <div className="flex justify-center">
          <div className="flex">
            <img className="mx-8" src={presentationDomainData} alt="PresentationDomainData" loading="lazy" />
          </div>
          <div className="flex">
            <img className="mx-8" src={presentationDomainDataExtended} alt="PresentationDomainDataExtended" loading="lazy" />
          </div>
          <div className="flex">
            <img className="mx-8" src={presentationDomainDataModularized} alt="PresentationDomainDataModularized" loading="lazy" />
          </div>
        </div>
      </section>

      <section>
        <h3>Monolitos modulares</h3>

        <blockquote>
          A modular monolith is a system where all of the code powers a single application
          and there are strictly enforced boundaries between different domains.
        </blockquote>
        <p>
          src:
          <a href="https://shopify.engineering/deconstructing-monolith-designing-software-maximizes-developer-productivity">
            &nbsp;Deconstructing the Monolith - Shopify
          </a>
        </p>
      </section>

      <section>
        <h3>Monolitos modulares</h3>

        <div className="flex">
          <img src={modularMonolith} alt="Modular Monolith" loading="lazy" />
        </div>
      </section>

      <section>
        <p>
          <a href="https://martinfowler.com/bliki/MonolithFirst.html">Martin Fowler MonolithFirst</a>

          <img src={monolithFirst} alt="Monolith First" loading="lazy" />
        </p>
      </section>

      <section>
        <h3>Domain Driven Design</h3>

        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm">
            <img src={domainDrivenDesign} alt="DDD" loading="lazy" />
          </div>
        </div>
      </section>

      <section>
        <h3>Domain Driven Design</h3>

        <div className="flex flex-wrap justify-center">
          <div className="max-w-3xl">
            <img src={boundedContexts} alt="Bounded Contexts" loading="lazy" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default WhyModularize;

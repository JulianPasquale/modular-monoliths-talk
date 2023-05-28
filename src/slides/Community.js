import React from 'react';
import componentBasedRailsApplications from '../images/community/component-based-rails-applications.jpg';
import gradualModularization from '../images/community/gradual-modularization.png';
import packwerk from '../images/community/packwerk.png';
import packsModularizationToolchain from '../images/community/packs-modularization-toolchain.png';

function Community() {
  return (
    <section>
      <section>
        <h3>Estado del arte</h3>
      </section>

      <section>
        <img src={componentBasedRailsApplications} alt="Component Based Rails applications" loading="lazy" />
        <small>Component Based Rails Applications - 2018</small>
      </section>

      <section>
        <img width="40%" src={gradualModularization} alt="Gradual Modularization" loading="lazy" />
        <small>
          <a href="https://leanpub.com/package-based-rails-applications">Gradual Modularization for Ruby and Rails </a>
          - WIP
        </small>
      </section>

      <section>
        <img src={packwerk} alt="Packwerk" loading="lazy" />
        <small><a href="https://github.com/Shopify/packwerk">Shopify/packwerk</a></small>
      </section>

      <section>
        <img width="75%" src={packsModularizationToolchain} alt="Modularization toolchain" loading="lazy" />
        <small><a href="https://github.com/rubyatscale">Ruby at Scale</a></small>
      </section>

      <section>
        <a href="https://github.com/rootstrap/rails-modular-monolith-with-ddd">
          rootstrap/rails-modular-monolith-with-ddd
        </a>
      </section>
    </section>
  );
}

export default Community;

import React from 'react';
import zeitwerk from '../images/MCApproach/zeitwerk.png';

function MCApproach() {
  return (
    <section>
      <section>
        <h3>MasterClass Approach</h3>
      </section>

      <section>
        <h3>Estructura de Rails</h3>

        <pre className="max-w-md">
          <code data-trim data-noescape className="language-bash">
            {`
              .
              ├── Gemfile
              ├── Gemfile.lock
              ├── app
              │  ├── assets
              │  ├── controllers
              │  ├── helpers
              │  ├── models
              │  └── views
              ├── bin
              ├── config
              │  ├── application.rb
              │  ├── database.yml
              │  ├── initializers
              │  ├── locales
              │  └── routes.rb
              ├── db
              │  ├── migrate
              │  ├── schema.rb
              │  └── seeds.rb
              ├── lib
              ├── public
              ├── test/spec
              └── vendor
            `}
          </code>
        </pre>
      </section>

      <section>
        <h3>Proposal 1 - Namespaces</h3>

        <pre className="max-w-md">
          <code data-trim data-noescape className="language-bash">
            {`
              .
              ├── app
              │  ├── controllers
              │  │  └── domain
              │  ├── services
              │  │  └── domain
              │  ├── models
              │  │  └── domain
              │  └── views
              │     └── domain
              ├── lib
              │  └── domain
              └── spec
                 ├── requests
                 │  └── domain
                 ├── services
                 │  └── domain
                 └── models
                    └── domain
            `}
          </code>
        </pre>
      </section>

      <section>
        <h3>Proposal 1 - Namespaces</h3>

        <pre className="max-w-md">
          <code data-trim data-noescape className="language-ruby">
            {`
              # config/routes.rb

              scope module: :domain do
                # Domain routes here
              end
            `}
          </code>
        </pre>
      </section>

      <section>
        <h3>
          Proposal 2 -
          <a href="https://github.com/fxn/zeitwerk"> Zeitwerk</a>
        </h3>

        <img width="40%" src={zeitwerk} alt="Zeitwerk" loading="lazy" />
      </section>

      <section>
        <h3>Proposal 2 - Zeitwerk</h3>

        <pre className="max-w-md">
          <code data-trim data-noescape className="language-bash">
            {`
              .
              ├── app
              │  └── domains
              │     └── my_domain
              │        ├── controllers
              │        ├── models
              │        ├── services
              │        └── views
              ├── lib
              │  └── domains
              │     └── my_domain
              └── spec
                 └── domains
                    └── my_domain
                       ├── requests
                       ├── models
                       └── services
            `}
          </code>
        </pre>
      </section>

      <section>
        <h3>Proposal 2 - Zeitwerk</h3>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              # config/application.rb

              # Intermediate step before migrating to components
              Rails.autoloaders.main.collapse("#{Rails.root}/app/domains/my_domain/controllers")
              Rails.autoloaders.main.collapse("#{Rails.root}/app/domains/my_domain")

              Rails.autoloaders.main.collapse("#{Rails.root}/lib/domains/my_domain")
              Rails.autoloaders.main.collapse("#{Rails.root}/lib/domains")
            `}
          </code>
        </pre>
      </section>

      <section>
        <h3>Domain driven applitacion structure</h3>

        <pre className="max-w-md">
          <code data-trim data-noescape className="language-bash">
            {`
              .
              ├── app
              ├── spec
              ├── lib
              ├── ...
              ├── domains
              │   ├── my_domain
              │   │  ├── app
              │   │  │  ├── helpers
              │   │  │  ├── jobs
              │   │  │  ├── models
              │   │  │  └── services
              │   │  ├── config
              │   │  │  ├── initializers
              │   │  │  └── routes
              │   │  ├── db
              │   │  │  └── migrate
              │   │  ├── lib
              │   │  │  └── tasks
              │   │  └── spec
              │   │      ├── controllers
              │   │      ├── factories
              │   │      ├── helpers
              │   │      ├── lib
              │   │      ├── models
              │   │      ├── requests
              │   │      ├── services
              │   │      └── support
            `}
          </code>
        </pre>
      </section>

      <section>
        <h3>Domain driven applitacion structure</h3>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              # config/application.rb
              module ClientApp
                class Application < Rails::Application
                  APP_PATHS = [
                    'app', 'app/controllers', 'app/helpers', 'app/models', 'app/views'
                  ].freeze
                  CONFIG_PATHS = [
                    'config', 'config/initializers', 'config/locales', 'config/routes'
                  ].freeze
                  DB_PATHS = ['db', 'db/migrate', 'db/seeds.rb'].freeze
                  LIB_PATHS = ['lib', 'lib/tasks'].freeze
              
                  PATHS = [*APP_PATHS, *LIB_PATHS, *CONFIG_PATHS, *DB_PATHS].freeze
              
                  Dir.glob('domains/*').each do |component_root|
                    PATHS.each do |path|
                      config.paths[path] << Rails.root.join(component_root, path)
                    end
              
                    Rails.autoloaders.main.ignore("#{Rails.root}/#{component_root}/lib/tasks")
                  end
                end
              end
            `}
          </code>
        </pre>
      </section>

      <section>
        <h3>Domain driven applitacion structure</h3>

        <pre>
          <code data-trim data-noescape className="language-ruby">
            {`
              # Rspec
              config.pattern << ",../domains/*/spec/**/*_spec.rb"

              # FactoryBot
              FactoryBot.definition_file_paths = Dir.glob('domains/*/spec/factories')
            `}
          </code>
        </pre>
      </section>

      <section>
        <h3>Herramientas adicionales</h3>

        <ul>
          <li>Scripts para ayudar a mover archivos</li>
          <li>Generator de migraciones</li>
          <li>Evitar clases duplicadas</li>
        </ul>
      </section>
    </section>
  );
}

export default MCApproach;

import React from 'react';

function CodeExample() {
  return (
    <section>
      <h3>Code Example</h3>

      <pre>
        <code data-trim data-noescape className="language-ruby">
          {`
            def hello_world
              puts "Hello world!"
            end

            hello_world # Hello world!
          `}
        </code>
      </pre>
    </section>
  );
}

export default CodeExample;

import React from 'react';
import image from '../images/image.jpeg';

function Image() {
  return (
    <section>
      <img src={image} alt="Meme" loading="lazy" />
    </section>
  );
}

export default Image;

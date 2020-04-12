import React, { useState } from "react";

const CarouselFx = props => {
  let { media } = props;
  const [photos, setPhotos] = useState(media.map(({ large }) => large));
  const [active, setActive] = useState(0);

  if (photos.length === 0) {
    setPhotos(["http://placecorgi.com/600/600"]);
  }

  return (
    <div className="carousel">
      <img src={photos[active]} alt="animal" />
      <div className="carousel-smaller">
        {photos.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            onClick={e => setActive(+e.target.dataset.index)}
            data-index={index}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselFx;

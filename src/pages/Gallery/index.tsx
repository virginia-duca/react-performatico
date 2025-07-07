import axios from "axios";
import { useEffect, useState } from "react";
import { GalleryGrid, GalleryItem } from "./style";
import { CONNECTION } from "../../config/config";
import { Section } from "./style";

interface NasaImage {
  url: string;
  title: string;
  media_type: string;
}

const Gallery = () => {
  const [pics, setPics] = useState<NasaImage[]>([]);

  useEffect(() => {
    axios
      .get(`${CONNECTION.APOD_URL}&count=30`)
      .then((res) => {
        setPics(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Section>
      <h3 className="gal-title">Galeria</h3>
      <GalleryGrid>
        {pics
          .filter((pic) => pic.media_type === "image")
          .map((pic, idx) => (
            <GalleryItem key={idx}>
              <img
                src={pic.url}
                alt={pic.title}
                loading="lazy"
                style={{
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div className="title">{pic.title}</div>
            </GalleryItem>
          ))}
      </GalleryGrid>
    </Section>
  );
};

export default Gallery;

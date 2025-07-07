import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { GalleryGrid, GalleryItem } from "./style";
import { CONNECTION } from "../../config/config";
import { Section } from "./style";

const Gallery = () => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
      axios
        .get(`${CONNECTION.APOD_URL}&count=30`)
        .then((res) => {
          console.log(res);
          setPics(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    // }
  }, []);

  return (
    <Section>
      <h3 className="gal-title">Galeria</h3>
      <GalleryGrid>
        {pics
          .filter((pic: any) => pic.media_type === "image")
          .map((pic: any, idx: number) => (
            <GalleryItem key={idx}>
              <img
                src={pic.url}
                alt={pic.title}
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

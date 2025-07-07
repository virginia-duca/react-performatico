import axios from "axios";
import { useEffect, useState } from "react";
import { MeteorShower } from "../../components";
import { CONNECTION } from "../../config/config";
import { Content, SectionContainer } from "./style";
import big from "../../assets/big.png";
import medium from "../../assets/medium.png";
import small from "../../assets/small.png";
import xsmall from "../../assets/xsmall.png";
import AsteroidCard from "./AsteroidCard";
import type { Asteroid } from "./types";

const Asteroids = () => {
  const [astros, setAstros] = useState<Asteroid[]>([]);

  useEffect(() => {
    axios
      .get(CONNECTION.ASTEROIDS_URL)
      .then((res) => {
        const formated: Asteroid[] = res.data.near_earth_objects.map(
          (aster: Asteroid) => {
            let image;
            const { estimated_diameter_max } =
              aster.estimated_diameter.kilometers;
            if (estimated_diameter_max < 15) {
              image = xsmall;
            } else if (estimated_diameter_max < 30) {
              image = small;
            } else if (estimated_diameter_max < 50) {
              image = medium;
            } else {
              image = big;
            }

            return {
              ...aster,
              image,
            };
          }
        );
        setAstros(formated);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  }, []);

  return (
    <SectionContainer>
      <MeteorShower />
      <Content>
        <h3 className="astro-title">Asteroides</h3>
        {astros.map((card) => {
          return (
            <AsteroidCard
              key={card.id}
              card={card}
            />
          );
        })}
      </Content>
    </SectionContainer>
  );
};

export default Asteroids;

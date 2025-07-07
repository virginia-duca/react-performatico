import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { MeteorShower } from "../../components";
import { CONNECTION } from "../../config/config";
import { Content, InfoCard, SectionContainer } from "./style";
import big from "../../assets/big.png";
import medium from "../../assets/medium.png";
import small from "../../assets/small.png";
import xsmall from "../../assets/xsmall.png";

interface EstimatedDiameter {
  meters: {
    estimated_diameter_max: number;
  };
  kilometers: {
    estimated_diameter_max: number;
  };
}

interface CloseApproachData {
  miss_distance: {
    kilometers: string;
  };
  relative_velocity: {
    kilometers_per_hour: string;
  };
  close_approach_date: string;
}

interface Asteroid {
  id: string;
  name_limited: string;
  estimated_diameter: EstimatedDiameter;
  absolute_magnitude_h: number;
  close_approach_data: CloseApproachData[];
  is_potentially_hazardous_asteroid: boolean;
  image: string;
  approach?: {
    close_approach_date: string;
  };
}

const Asteroids = () => {
  const [astros, setAstros] = useState<Asteroid[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");

  useEffect(() => {
    axios
      .get(CONNECTION.ASTEROIDS_URL)
      .then((res) => {
        const formated: Asteroid[] = res.data.near_earth_objects.map((aster: Asteroid) => {
          let image;
          const { estimated_diameter_max } = aster.estimated_diameter.kilometers;
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
        });
        console.log(formated);
        setAstros(formated);
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  }, []);

  const handleOpen = useCallback((id: string) => {
    setSelectedId((old) => (old === id ? "" : id));
  }, []);

  return (
    <SectionContainer>
      <MeteorShower />
      <Content>
        <h3 className="astro-title">Asteroides</h3>
          {astros.map((card) => {
            return (
              <InfoCard key={`ater_${card.id}`} open={selectedId === card.id}>
                <div className="row">
                  <img src={card.image} alt="imagem asteroide" loading="lazy" />
                  <div className="column">
                    <p className="aster-name">{`🪐 Nome: ${card.name_limited}`}</p>
                    <p className="description">{`📏 Tamanho: ${card.estimated_diameter.meters.estimated_diameter_max.toFixed(0)} metros de diâmatro`}</p>
                  </div>
                  <span
                    className="material-icons arrow"
                    onClick={() => handleOpen(card.id)}
                  >
                    chevron_right
                  </span>
                </div>
                <div className="collapsible">
                  <p className="description">{`💡 Magnitude absoluta (brilho): ${card.absolute_magnitude_h.toFixed(0)}`}</p>
                  <p className="description">{`🌍 Distância: ${card?.close_approach_data[0]?.miss_distance?.kilometers || ""} kilometros de distancia da terra`}</p>
                  <p className="description">{`🚀 Velocidade relativa: esta orbitando a terra a ${card?.close_approach_data[0]?.relative_velocity?.kilometers_per_hour || ""}km/h`}</p>
                  <p className="description">{`📅 Data da aproximação: ${card.approach?.close_approach_date}`}</p>
                  <p className="description">{`⚠️ Potencialmente perigoso: ${card.is_potentially_hazardous_asteroid ? "Sim" : "Não"}`}</p>
                </div>
              </InfoCard>
            );
          })}
      </Content>
    </SectionContainer>
  );
};

export default Asteroids;

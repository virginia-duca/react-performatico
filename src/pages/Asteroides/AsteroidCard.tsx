import React, { useCallback, useState } from "react";
import { InfoCard } from "./style";
import type { Asteroid } from "./types";

interface AsteroidCardProps {
  card: Asteroid;
}

const AsteroidCard = ({ card }: AsteroidCardProps) => {
  const [selectedId, setSelectedId] = useState<string>("");

   const handleOpen = useCallback((id: string) => {
    setSelectedId((old) => (old === id ? "" : id));
  }, []);

  return (
  <InfoCard open={selectedId === card.id}>
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

  )
};

export default  React.memo(AsteroidCard);

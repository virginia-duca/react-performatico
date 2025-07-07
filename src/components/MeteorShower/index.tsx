import { Star, Meteor, ShowerContainer } from "./style";
import React from "react";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 const MeteorShower = () => {
  // Gera estrelas
  const stars = Array.from({ length: 300 }).map((_, i) => (
    <Star
      key={`star-${i}`}
      left={getRandomInt(0, window.innerWidth)}
      top={getRandomInt(0, window.innerHeight)}
    />
  ));

  // Gera meteoros
  const meteors = Array.from({ length: 15 }).map((_, i) => (
    <Meteor
      key={`meteor-${i}`}
      left={getRandomInt(50, 99)}
      top={getRandomInt(0, window.innerHeight / 2)}
      duration={getRandomInt(3, 10)}
    />
  ));

  return (
    <ShowerContainer>
      {stars}
      {meteors}
    </ShowerContainer>
  );
};

export default React.memo(MeteorShower)
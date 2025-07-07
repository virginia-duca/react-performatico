import axios from "axios";
import { useEffect, useState } from "react";
import spaceBg from "../../assets/earth.jpg";
import iss from "../../assets/ISS.jpg";
import aster from "../../assets/asteroids.jpg";
import { CONNECTION } from "../../config/config";
import { IntroCard } from "../../components";
import {
  FotoSection,
  SectionContainer,
  Title,
  CardsContainer,
} from "./style";

interface Card {
  title: string;
  description: string;
  bgUrl: string;
}
const info = [
  {
    title: "Missões",
    description:
      "Explore as principais missões espaciais realizadas por agências do mundo todo. Descubra detalhes sobre lançamentos, objetivos, tripulação e acompanhe o progresso das jornadas que expandem nosso conhecimento sobre o universo.",
    bgUrl: iss,
  },
  {
    title: "Galeria",
    description:
      "Desfrute de uma seleção das imagens astronômicas mais impressionantes, capturadas por telescópios e sondas espaciais. Inspire-se com fotos do cosmos, planetas, estrelas e fenômenos que revelam a beleza do universo.",
    bgUrl: "",
  },
  {
    title: "Asteroides",
    description:
      "Acompanhe asteroides que passam próximos à Terra em tempo real. Veja informações sobre tamanho, distância, velocidade e datas de aproximação, além de curiosidades sobre esses fascinantes corpos celestes.",
    bgUrl: aster,
  },
];

const Home = () => {
  const [cards, setCards] = useState<Card[]>(info);

  useEffect(() => {
    const cachedUrl = localStorage.getItem("apodUrl");
    if (cachedUrl) {
      setCards((old) =>
        old.map((card) =>
          card.title === "Galeria" ? { ...card, bgUrl: cachedUrl } : card
        )
      );
    } else {
      axios.get(CONNECTION.APOD_URL)
        .then((res) => {
          const url = res.data.hdurl;
          localStorage.setItem("apodUrl", url);
          setCards((old) =>
            old.map((card) =>
              card.title === "Galeria" ? { ...card, bgUrl: url } : card
            )
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);


  return (
    <>
      {/* <Menu /> */}
      <FotoSection $bgUrl={spaceBg}>
        <SectionContainer>
          <Title>
            Explorador <br />
            <span className="bolder">Espacial</span>
          </Title>
          <CardsContainer>
            {cards.map((card, i) => (
              <IntroCard key={i} {...card} />
            ))}
          </CardsContainer>
        </SectionContainer>
      </FotoSection>
      {/* <Gradient>
        <SectionContainer>
          <MeteorShower />
        </SectionContainer>
      </Gradient> */}
    </>
  );
};

export default Home;

import axios from "axios";
import { useEffect, useState } from "react";
import spaceBg from "../../assets/earth.jpg";
import { CONNECTION } from "../../config/config";
import { Loading, MeteorShower } from "../../components";
import { FotoSection, SectionContainer, Gradient } from "./style";

const Home = () => {
  const [apod, setApod] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  return (
    <>
      <FotoSection $bgUrl={spaceBg}></FotoSection>

      <Gradient>
        <SectionContainer>
          <MeteorShower />
        </SectionContainer>
      </Gradient>
    </>
  );
};

export default Home;

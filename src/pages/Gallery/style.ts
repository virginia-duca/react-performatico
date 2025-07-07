import styled from "styled-components";
import { PALLETE } from "../../config/config";

export const Section = styled.section`
  /* height: 100vh; */
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: ${PALLETE.black};
  padding: 0 50px 0 100px;
  box-sizing: border-box;

  .gal-title {
    font-size: 36px;
    letter-spacing: 10px;
    font-weight: 700;
  }

`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 32px;
`;

export const GalleryItem = styled.div`
  background: #111;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
    z-index: 2;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    aspect-ratio: 1.2/1; /* Mantém proporção, mas deixa variar */
  }
  .title {
    padding: 12px;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    text-align: center;
    background: #222;
  }
`;
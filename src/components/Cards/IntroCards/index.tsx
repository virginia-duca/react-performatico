import { Link } from "react-router-dom";
import { Card } from "./style";

interface CardProps {
  title: string;
  description: string;
  bgUrl: string;
}

const IntroCard = ({ title, description, bgUrl }: CardProps) => {
  return (
    <Link to={`/${title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`} style={{ height: '100%', width: '25%'}}>
    <Card $bgUrl={bgUrl}>
      <div className="colum">

      <h4 className="card-title">{title}</h4>
      <p className="description">{description}</p>
      </div>
    </Card>
    </Link>
  );
};

export default IntroCard;
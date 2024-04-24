import { useEffect, useState } from "react";
import { Acao } from "../interface/Acao";
import { fetchRodolfo } from "../service/RodolfoClient";
import { Card } from "react-bootstrap";

const AcaoUser: React.FC<Acao> = ({ symbol}) => {
  const [user, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRodolfo(symbol)
      .then((response) => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [symbol]);
  if (loading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error}</div>;

  return (
    <div className="d-flex justify-content-center mt-4">
        <Card style={{ width: '25rem' }} className="mx-auto">
        <Card.Body>
            <img src={user?.logourl} alt="Logo" />
            <Card.Title>{user?.symbol}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{user?.currency}</Card.Subtitle>
            <Card.Text>{user?.longName}</Card.Text>
            <Card.Text>Preço de Mercado Regular: {user?.regularMarketPrice}</Card.Text>
            <Card.Text>Intervalo de 52 semanas: {user?.fiftyTwoWeekRange}</Card.Text>
        </Card.Body>
        </Card>
    </div>
  )
};

export default AcaoUser;

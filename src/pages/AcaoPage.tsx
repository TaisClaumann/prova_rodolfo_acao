import React, { useState } from "react";
import AcaoComponent from "../componentes/AcaoComponent";
import { Form, Alert } from "react-bootstrap";

const AcaoPage = () => {
    const [codigoAcao, setCodigoAcao] = useState("");
    const [error, setError] = useState<string | null>(null);
   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputCodigo = event.target.value.toUpperCase();

      if (/^[A-Z]{4}[0-9]+$/.test(inputCodigo)) {
        setCodigoAcao(inputCodigo);
        setError(null); 
      } else {
        setCodigoAcao(inputCodigo);
        setError("Código de ação inválido. Por favor, insira um código válido.");
      }
    };
   
    return (
      <div className="pagina-inicial">
        <div className="acao-input">
          <Form.Label><b>Código da Ação:</b></Form.Label>
          <Form.Control style={{ width: "650px" }}
            size="lg"
            type="text"
            value={codigoAcao}
            onChange={handleChange}
          />
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
        {codigoAcao && !error && <AcaoComponent symbol={codigoAcao} />}
      </div>
    );
  };

export default AcaoPage;

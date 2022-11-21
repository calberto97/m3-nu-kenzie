import { useState } from "react";
import "./style.css";

export const Form = ({ listTransactions, setListTransactions, array, setArray, children}) => {

const [inputs, setInputs] = useState()

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    console.log(listTransactions)
  };

  const handleSubmit = () => {
    if (inputs.description && inputs.value && inputs.type) {
      setListTransactions([...listTransactions, inputs]);
      setArray([])
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="desc">Descrição</label>
      <input
        type="text"
        name="description"
        placeholder="Digite aqui sua descrição"
        maxLength="24"
        required
        onChange={(e) => handleChange(e)}
      />
      <small>Ex: Compra de roupas</small>
      <div className="input-wrapper">
        <span>
          <label htmlFor="value">Valor</label>
          <input
            type="number"
            name="value"
            id=""
            placeholder="0"
            required
            onChange={(e) => handleChange(e)}
          />
          <small>R$</small>
        </span>
        <span>
          <label htmlFor="type">Tipo de valor</label>
          <select name="type" id="" onChange={(e) => handleChange(e)}>
            <option disabled selected>
              Tipo
            </option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </span>
      </div>
      <button
        type="submit"
        className="button-brand"
        onClick={() => handleSubmit()}
      >
        Inserir valor
      </button>
      {children}
    </form>
  );
};

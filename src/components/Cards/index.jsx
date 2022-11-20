import "./style.css";
import NoCard from "../../assets/NoCard.svg";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export const Cards = (listTransactions, setListTransactions) => {
  const [array, setArray] = useState(
    listTransactions.listTransactions
  );

  function todos() {
    setArray(listTransactions.listTransactions);
  }

  function entrada() {
    setArray(
      listTransactions.listTransactions.filter(
        (element) => element.type === "Entrada"
      )
    );
  }

  function despesas() {
    setArray(
      listTransactions.listTransactions.filter(
        (element) => element.type === "Saída"
      )
    );
  }

  function deleteEntry(removeItem) {
    console.log(listTransactions.listTransactions.length)
    console.log(removeItem)
    if (listTransactions.listTransactions.length === 1) {
      setListTransactions([]);
      setArray(listTransactions.listTransactions);
    }
    else {
      const newList = listTransactions.listTransactions.filter((element) => element !== removeItem)
      console.log(newList)
      setListTransactions(newList)
      setArray(newList)
    }
  }

  return (
    <div className="cards-wrapper">
      <div className="card-header">
        <p className="font16">Resumo financeiro</p>
        <span className="filter">
          <button className="button-grey" onClick={() => todos()}>
            Todos
          </button>
          <button className="button-grey" onClick={() => entrada()}>
            Entrada
          </button>
          <button className="button-grey" onClick={() => despesas()}>
            Despesas
          </button>
        </span>
      </div>

      {listTransactions.listTransactions.length === 0 ? ( //precisava chamar o todos() aqui
        <ul>
          <h2>Você ainda não possui nenhum lançamento</h2>
          <li>
            <img src={NoCard} alt="" srcSet="" />
          </li>
          <li>
            <img src={NoCard} alt="" srcSet="" />
          </li>
          <li>
            <img src={NoCard} alt="" srcSet="" />
          </li>
        </ul>
      ) : array.length === 0 ? (
        <ul>
          {listTransactions.listTransactions.map((element, index) =>
            element.type === "Saída" ? (
              <li className="card card2" key={index} id={index}>
                <span>
                  <p className="font16">{element.description}</p>
                  <small>{element.type}</small>
                </span>
                <span>
                  <small>R$ {element.value},00</small>
                  <FaTrash onClick={() => deleteEntry(element)} />
                </span>
              </li>
            ) : (
              <li className="card" key={index} id={index}>
                <span>
                  <p className="font16">{element.description}</p>
                  <small>{element.type}</small>
                </span>
                <span>
                  <small>R$ {element.value},00</small>
                  <FaTrash onClick={() => deleteEntry(element)} />
                </span>
              </li>
            )
          )}
        </ul>
      ) : (
        <ul>
          {array.map((element, index) =>
            element.type === "Saída" ? (
              <li className="card card2" key={index} id={index}>
                <span>
                  <p className="font16">{element.description}</p>
                  <small>{element.type}</small>
                </span>
                <span>
                  <small>R$ {element.value},00</small>
                  <FaTrash onClick={() => deleteEntry(element)} />
                </span>
              </li>
            ) : (
              <li className="card" key={index} id={index}>
                <span>
                  <p className="font16">{element.description}</p>
                  <small>{element.type}</small>
                </span>
                <span>
                  <small>R$ {element.value},00</small>
                  <FaTrash onClick={() => deleteEntry(element)} />
                </span>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

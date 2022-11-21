import "./style.css";
import NoCard from "../../assets/NoCard.svg";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export const Cards = ({listTransactions, setListTransactions, array, setArray}) => {
  // const [array, setArray] = useState(
  //   listTransactions
  // );

  function todos() {
    setListTransactions(listTransactions);
    setArray([])
  }

  function entrada() {
    setArray(
      listTransactions.filter(
        (element) => element.type === "Entrada"
      )
    );
  }

  function despesas() {
    setArray(
      listTransactions.filter(
        (element) => element.type === "Saída"
      )
    );
  }

  function deleteEntry(removeItem) {
      const newList = listTransactions.filter((element) => element !== removeItem)
      setListTransactions(newList)
      // setArray(newList)  
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

      {listTransactions.length === 0 ? ( //precisava chamar o todos() aqui
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
          {listTransactions.map((element, index) =>
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

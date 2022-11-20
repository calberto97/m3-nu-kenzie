import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Logo } from "./components/Logo";
import { Landing } from "./components/Landing";
import { Main } from "./components/Main";
import { Form } from "./components/Form";
import { Cards } from "./components/Cards";
import { TotalMoney } from "./components/TotalMoney";

function App() {
  const [page, setPage] = useState(!false);

  const [listTransactions, setListTransactions] = useState([]);

  const changePage = () => {
    setPage(!page);
    document.body.classList.toggle("background");
  };

  return (
    <div className="App">
      {page ? (
        <Landing>
          <Logo />
          <Button
            innerText="Iniciar"
            className="button-brand"
            onClick={() => changePage()}
          />
        </Landing>
      ) : (
        <Main changePage={changePage}>
          <Logo />
          <Button
            innerText="Inicio"
            className="button-grey"
            onClick={() => changePage()}
          />
          <Form
            setListTransactions={setListTransactions}
            listTransactions={listTransactions}
          >
            <TotalMoney listTransactions={listTransactions} />
          </Form>
          <Cards
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        </Main>
      )}
    </div>
  );
}

export default App;

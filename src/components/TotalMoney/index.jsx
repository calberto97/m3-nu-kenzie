import "./style.css";

export const TotalMoney = (listTransactions, array) => {

  return (
    <div className="total-money-wrapper">
      <span>
        <p className="font16">Valor total:</p>
        {listTransactions.listTransactions.length === 0 ? (
          <p className="font16">R$ 0,00</p>
        ) : (
          <p className="font16">
            R$
            {listTransactions.listTransactions.reduce(
              (acc, nextValue) => acc + Number(nextValue.value),
              0
            )}
            ,00
          </p>
        )}
      </span>
      <small>O valor se refere ao saldo total</small>
    </div>
  );
};

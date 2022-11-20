import "./style.css";
import illustration from "../../assets/illustration.svg";

export const Landing = ({children}) => {
  return (
    <div className="container wrapper">
      <section className="sec-left">
        {children[0]}
        <h1> Centralize o controle das suas finanças</h1>
        <p className="font16">de forma rápida e segura</p>
        {children[1]}
      </section>

      <section className="sec-right">
        <img src={illustration} alt="" srcset="" />
      </section>
    </div>
  );
};

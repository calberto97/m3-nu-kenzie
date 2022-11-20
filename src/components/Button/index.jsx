import './style.css'

export const Button = ({ onClick, innerText, className }) => {

    return (
      <button className={className} onClick={onClick}>
        {innerText}
      </button>
    );
}
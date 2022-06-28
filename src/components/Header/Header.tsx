import './Header.css';
import arrow from '../../assets/arrow.svg';

interface HeaderProps {
  setCondicional: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
}

const Header = ({ setCondicional, username }: HeaderProps) => {
  return (
    <div className="header">
      <div className="goBack">
        <button
          onClick={() => setCondicional(false)}
          title="Back to first screen"
        >
          <img
            src={arrow}
            alt="Ícone de seta pra esquerda, para voltar pra tela de login"
          />
        </button>
        <button
          onClick={() => setCondicional(false)}
          title="Back to first screen"
        >
          Go back
        </button>
      </div>
      <p>{username}</p>
    </div>
  );
};

export default Header;

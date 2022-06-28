import { useState, useEffect } from 'react';
import '../styles/MainPage.css';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Error from '../assets/error.svg';
import { getData } from '../services/requests';

interface MainPageProps {
  setCondicional: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
}

const MainPage = ({ setCondicional, username }: MainPageProps) => {
  const [data, setData] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const api = async () => {
    const { data, erro } = await getData().finally(() => setIsLoading(false));
    if (data) {
      setData(data);
    } else {
      alert(erro);
    }
  };

  useEffect(() => {
    api();
  }, []);

  function handleDelete(id: string) {
    setData(data.filter(data => data.id !== id));
  }

  return (
    <div className="mainContainer">
      <Header setCondicional={setCondicional} username={username} />
      <main className="main">
        {isLoading && <p>Carregando</p>}
        {!data.length && !isLoading && (
          <div className="reqError">
            <div>
              <h1>Erro de requisição:</h1>
              <h2>
                Não foi possível acessar a API, <br /> ou a API não possui
                itens.
              </h2>
              <p>
                Por favor, tente se conectar à internet. Ou contate o
                administrador.
              </p>
            </div>
            <img
              src={Error}
              alt="Ícone de seta pra esquerda, para voltar pra tela de login"
            />
          </div>
        )}
        {data.map((item, index) => (
          <Card handleDelete={handleDelete} key={index} dataApi={item} />
        ))}
      </main>
    </div>
  );
};

export default MainPage;

import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/MainPage.css';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Error from '../assets/error.svg';

interface MainPageProps {
  setCondicional: React.Dispatch<React.SetStateAction<boolean>>;
  username: string;
}

interface DataProps {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  phone: string;
}

export default function MainPage({ setCondicional, username }: MainPageProps) {
  const [dataCities, setDataCities] = useState<DataProps[]>([]);

  useEffect(() => {}, [dataCities]);

  useEffect(() => {
    const getData = () => {
      axios
        .get('https://api.openbrewerydb.org/breweries')
        .then(function (response) {
          setDataCities(response.data);
        });
    };

    getData();
  }, []);

  function handleDelete(id: string) {
    setDataCities(dataCities.filter(data => data.id !== id));
  }

  return (
    <div className="mainContainer">
      <Header setCondicional={setCondicional} username={username} />
      <main className="main">
        {!dataCities.length && (
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
        {dataCities.map((item, index) => (
          <Card handleDelete={handleDelete} key={index} allInformation={item} />
        ))}
      </main>
    </div>
  );
}

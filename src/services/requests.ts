import axios, { AxiosError } from 'axios';

export const getData = async () => {
  const res = await axios
    .get<DataProps[]>('https://api.openbrewerydb.org/breweries')
    .catch(err => err as AxiosError);
  if (!(res instanceof Error)) {
    return { data: res.data };
  } else {
    return {
      erro: 'Não foi possível acessar a API.'
    };
  }
};

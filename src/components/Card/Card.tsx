import './Card.css';
import trashIcon from '../../assets/trash.svg';
import TagItem from './TagItem';

interface CardProps {
  dataApi: DataProps;
  handleDelete: (id: string) => void;
}

const Card = ({ dataApi, handleDelete }: CardProps) => {
  return (
    <div className="cardItem">
      <div>
        <button onClick={() => handleDelete(dataApi.id)} title="Delete">
          <img
            src={trashIcon}
            alt="Ícone de lixeira para excluir o card"
            className="trashIcon"
          />
        </button>

        <h3 className="cardTitle">{dataApi.name}</h3>
        <p className="cardAddress">
          {dataApi.street && (
            <>
              {dataApi.street} <br />
            </>
          )}
          {dataApi.city}, {dataApi.state} - {dataApi.country}
        </p>
      </div>
      <TagItem
        phone={dataApi.phone}
        zip={dataApi.postal_code}
        type={dataApi.brewery_type}
      />
    </div>
  );
};

export default Card;

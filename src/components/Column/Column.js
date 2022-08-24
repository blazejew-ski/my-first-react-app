import styles from './Column.module.scss'
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

const Column = props => {
  const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <h3 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon} />{props.title}</h3>
      <ul className={styles.cards}>
        {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;


import PropTypes from 'prop-types';
import Class from './Class';

export default function Record({ record }) {
  return (
    <div className="player-info">
      <p className="player-name">{record.card_name}</p>
      <Class rawClass={record.class} />
      <p className="player-title">{record.title}</p>
      <p className="player-rating">Rating {record.rating} (Max {record.max_rating})</p>
    </div>
  );
}

Record.propTypes = {
  record: PropTypes.shape({
    card_name: PropTypes.string,
    class: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    max_rating: PropTypes.number,
  }).isRequired,
};
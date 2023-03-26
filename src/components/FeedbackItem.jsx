import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        type="button"
        className="close"
        onClick={() => handleDelete(item.id)}
      >
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.defaultProps = {
  handleDelete: () => {},
};

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func,
};
export default FeedbackItem;

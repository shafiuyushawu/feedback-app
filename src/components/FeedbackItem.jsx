import propTypes from 'prop-types';
import { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        type="button"
        className="close"
        onClick={() => deleteFeedback(item.id)}
      >
        <FaTimes color="purple" />
      </button>
      <button type="button" onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.defaultProps = {
  item: {},
};

FeedbackItem.propTypes = {
  item: propTypes.shape({
    text: propTypes.string,
    rating: propTypes.number,
    id: propTypes.number,
  }),
};

export default FeedbackItem;

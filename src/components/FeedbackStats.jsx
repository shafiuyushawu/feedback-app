import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  // Calculate average rating
  let average = feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>
        {feedback.length}
        {' '}
        Reviews
      </h4>
      <h4>
        Average Raating:
        {Number.isNaN(average) ? 0 : average}
      </h4>
    </div>
  );
}

FeedbackStats.defaultProps = {
  feedback: () => {},
};

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};
export default FeedbackStats;

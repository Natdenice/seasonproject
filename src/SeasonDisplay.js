import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    sentence: 'It is so hot, lets make a dive into the swimming pool !',
    iconName: 'sun'
  },
  winter: {
    sentence: 'Brrr, it is so cold, lets go to the Bed !',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 3 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { sentence, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <p
        style={{
          fontSize: '24px',
          color: season === 'summer' ? 'white' : 'blue'
        }}
      >
        {sentence}
      </p>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

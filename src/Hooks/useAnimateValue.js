import { useState, useEffect } from 'react';

const useAnimatedValue = (targetValue, duration = 500) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateValue = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setAnimatedValue(progress * targetValue);
      if (now < endTime) {
        setTimeout(updateValue, 16); 
      }
    };

    updateValue();
  }, [targetValue, duration]);

  return Math.round(animatedValue);
};

export default useAnimatedValue;

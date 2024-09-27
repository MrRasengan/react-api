import React, { useState } from 'react';

const Joke = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.error('Ошибка при получении шутки:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchJoke}>Получить шутку</button>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  );
};

export default Joke;
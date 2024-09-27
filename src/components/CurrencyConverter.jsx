import React, { useState } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleConvert = async () => {
    setError('');
    setResult(null);

    if (!amount || !currency) {
      setError('Пожалуйста, введите сумму и валюту.');
      return;
    }

    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/f83c075f1490e3a5e5913f75/latest/RUB`);
      const rate = response.data.conversion_rates[currency];

      if (!rate) {
        setError('Неверный код валюты.');
        return;
      }

      const convertedAmount = (amount * rate).toFixed(2);
      setResult(`${amount} RUB = ${convertedAmount} ${currency}`);
    } catch (err) {
      setError('Ошибка при получении данных. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Сумма в RUB"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Код валюты (например, USD)"
        value={currency}
        onChange={(e) => setCurrency(e.target.value.toUpperCase())}
      />
      <button onClick={handleConvert}>Конвертировать</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && <p>{result}</p>}
    </div>
  );
};

export default CurrencyConverter;
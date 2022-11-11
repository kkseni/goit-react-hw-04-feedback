import { useState } from 'react';
import { Container } from './components/App/App.styled';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';

// Масив значень, які передаємо, та робимо "map()" для отримання значень
const options = ['Good', 'Neutral', 'Bad'];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Робимо "+ 1" на кнопку , яку клікнули
  const targetButtonClickChange = event => {
    const name = event.target.textContent.toLowerCase();

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  // Передаємо "Дітьми" значення
  const countTotalFeedback = good + neutral + bad;

  // Формула прорахунку позитивних значень
  const positivePercentage = Math.round((good / countTotalFeedback) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={targetButtonClickChange}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </Container>
  );
};

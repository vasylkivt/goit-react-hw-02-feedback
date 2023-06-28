import { Component } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = (event, option) => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
    event.target.blur();
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return bad + good + neutral;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((100 / total) * good || 0);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage() + '%';
    return (
      <>
        <Section
          title="Please leave feedback"
          // styles={{ backgroundColor: '#cccccc' }}
        >
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>

        <Section
          title="Statistics"
          // styles={{ backgroundColor: '#c6f6ff' }}
        >
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={totalPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

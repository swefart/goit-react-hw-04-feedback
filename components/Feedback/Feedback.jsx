import { Component } from "react";
import { Wrapper, NotificationMessage } from "./Feedback.styled";
import Statistics from '../Statistics/Statistics'
import FeedBackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from "components/Section/Section";


export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = option => {
        this.setState(prevState => {return {  [option]: prevState[option] + 1}})
    }

    countTotalFeedback() {
        return (this.state.good + this.state.neutral + this.state.bad);
    }

    countPositiveFeedbackPercentage = total => {
        return `${Math.round((this.state.good / total) * 100)}%`
    } 

    render() {
        const total = this.countTotalFeedback();
        const { good, neutral, bad } = this.state;
        const posFeedback = this.countPositiveFeedbackPercentage(total);
        return (
            <Wrapper>
                <Section title={"Please leave feedback"}>
                    <FeedBackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} >
                    </FeedBackOptions>
                </Section>
            
                <Section title={"Statistics"}>
                    {total>0 ? <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={posFeedback} /> :
                    <NotificationMessage>There is no feedback</NotificationMessage>
                    }
                </Section>
            </Wrapper>
        )
    }
    
}


export default Feedback
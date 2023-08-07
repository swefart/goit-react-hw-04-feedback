
import { Wrapper, NotificationMessage } from "./Feedback.styled";
import Statistics from '../Statistics/Statistics'
import FeedBackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from "components/Section/Section";
import React, { useState } from "react"

export const FeedBack = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const options = ['good', 'neutral', 'bad']
    
    const onLeaveFeedback = name => {
       if (name === "good") {
           setGood((prev) => prev + 1 )
        }
        if (name === "neutral") {
        setNeutral(prev => prev + 1)
        }
        if (name === "bad") {
           setBad(prev => prev + 1) 
       }
    }
     return ( 
       
    
            <Wrapper>
                <Section title={"Please leave feedback"}>
                    <FeedBackOptions options={options} onLeaveFeedback={onLeaveFeedback} >
                    </FeedBackOptions>
                </Section>
            
                <Section title={"Statistics"}>
                    {good || neutral || bad ? <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={good + neutral + bad}
                        positivePercentage={Math.round((good / (good + neutral + bad)) * 100)} /> :
                    <NotificationMessage>There is no feedback</NotificationMessage>
                    }
                </Section>
            </Wrapper>
        )
    
}

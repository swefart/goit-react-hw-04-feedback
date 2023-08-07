import customizeText from "../Utils/customizeText";

import { BtnList, BtnItem, Btn } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types'


const FeedBackOptions = ({options, onLeaveFeedback}) => {
    return (
        <BtnList>
            {options.map(name => {
                return (
                    <BtnItem key={name}>
                        <Btn  onClick={() => {onLeaveFeedback(name)}}> {customizeText(name) }</Btn>
                    </BtnItem>
                )
            })
            }
        </BtnList>
    )
}

export default FeedBackOptions


FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
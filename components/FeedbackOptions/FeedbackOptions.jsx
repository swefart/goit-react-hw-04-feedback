import customizeText from "Utils/customizeText";
import { BtnList, BtnItem, Btn } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types'


const FeedBackOptions = ({options, onLeaveFeedback}) => {
    return (
        <BtnList>
            {options.map(option => {
                return (
                    <BtnItem key={option}>
                        <Btn  onClick={() => {onLeaveFeedback(option)}}> {customizeText(option) }</Btn>
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
import { StatsList, StatsItem } from "./Statistics.styled";
import customizeText from "Utils/customizeText";
import PropTypes from 'prop-types'

export const Statistics = stats => {
    return (
        <StatsList>
            {Object.keys(stats).map(el => {
                
                return (
                    <StatsItem key={el}>{
                        customizeText(el)}: {stats[el]}  </StatsItem>
                )
             })}
        </StatsList>
    );
}

export default Statistics

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
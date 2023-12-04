// import { Component } from 'react';
// import { Btn } from './Feedback.styled';
// class Feedback extends Component {
//   state = {
//     counter: 0,
// good: 0,
// neutral: 0,
// bad: 0,
// };

// handleChange = ({ target: { value, name } }) => {
//   this.setState({ [name]: value });
// };

// handleClick = ({ target: { value, name } }) => {
//   this.setState(prevState => {
//     return {
//       [name]: prevState.target.value + 1,
//     };
//   });
// };

// handleClick = e => {
//   this.setState(prevState => {
//     return {
//       counter: prevState.counter + 1,
//     };
//   });
// };

//   render() {
//     return (
//       <div
//         className="Feedback"
//         style={{
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 20,
//           width: 80,
//         }}
//       >
//         <>
//           <span className="Feedback-good-value">{this.state.counter}</span>
//           <button
//             className="Feedback-good-btn"
//             name="good"
//             onClick={this.handleClick}
//           >
//             Good
//           </button>
//         </>
//         <>
//           <span className="Feedback-neutral-value">0</span>
//           <button
//             className="Feedback-neutral-btn"
//             name="neutral"
//             onClick={this.handleClick}
//           >
//             Neutral
//           </button>
//         </>
//         <>
//           <span className="Feedback-bad-value">0</span>
//           <button
//             className="Feedback-bad-btn"
//             name="bad"
//             onClick={this.handleClick}
//           >
//             Bad
//           </button>
//         </>
//       </div>
//     );
//   }
// }
// export default Feedback
const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
export default Feedback;

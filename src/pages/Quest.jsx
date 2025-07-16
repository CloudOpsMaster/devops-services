import React, { useState } from 'react';
import questionsData from './questions.json';
import './Quest.css';

export default function Quest() {
  // State to track current question index
  const [current, setCurrent] = useState(0);
  // State to track which option the user selected
  const [selected, setSelected] = useState(null);
  // State to track the user's score
  const [score, setScore] = useState(0);
  // State to control showing the correct/wrong answer feedback
  const [showAnswer, setShowAnswer] = useState(false);
  // State to check if quiz is finished
  const [isFinished, setIsFinished] = useState(false);

  // Get current question object
  const question = questionsData[current];

  // Handle user selecting an option
  function onSelectOption(index) {
    // Prevent selecting after answer is revealed
    if (showAnswer) return;
    setSelected(index);
    setShowAnswer(true);
    // Increase score if selected option is correct
    if (index === question.answerIndex) setScore(score + 1);
  }

  // Handle clicking "Next Question" button
  function onNext() {
    // Reset selected option and answer display
    setSelected(null);
    setShowAnswer(false);
    // Move to next question or finish quiz
    if (current + 1 < questionsData.length) {
      setCurrent(current + 1);
    } else {
      setIsFinished(true);
    }
  }

  // Handle quiz restart - reset all states
  function onRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowAnswer(false);
    setIsFinished(false);
  }

  // Show final results screen when quiz is finished
  if (isFinished) {
    return (
      <div className="quest-container">
        <h2>Quiz Completed!</h2>
        <p>Your final score is:</p>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          {score} / {questionsData.length}
        </p>
        <button className="quest-btn" onClick={onRestart}>
          Start Again
        </button>
      </div>
    );
  }

  // Render current question and options
  return (
    <div className="quest-container">
      <h2>Question {current + 1} of {questionsData.length}</h2>
      <p className="quest-question">{question.question}</p>

      <div className="quest-options">
        {question.options.map((option, i) => {
          // Determine class for option button based on selection and correctness
          let className = "quest-option";
          if (showAnswer) {
            if (i === question.answerIndex) className += " correct";
            else if (i === selected) className += " wrong";
          }
          return (
            <button
              key={i}
              className={className}
              onClick={() => onSelectOption(i)}
              disabled={showAnswer} // Disable buttons after answer is shown
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="quest-controls" style={{ marginTop: 20 }}>
        {/* Show "Next Question" button if answer shown and not last question */}
        {showAnswer && current + 1 < questionsData.length && (
          <button className="quest-btn" onClick={onNext}>Next Question</button>
        )}

        {/* Show "Restart Quiz" button if no answer selected yet or at last question */}
        {(!showAnswer || current + 1 === questionsData.length) && (
          <button className="quest-btn" onClick={onRestart}>Restart Quiz</button>
        )}
      </div>

      {/* Display current score */}
      <div className="quest-score" style={{ marginTop: 15 }}>
        Score: {score} / {questionsData.length}
      </div>
    </div>
  );
}

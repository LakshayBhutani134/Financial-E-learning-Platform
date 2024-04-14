import React, { useState } from 'react';
import './Quiz.css'; // Import CSS file for styling

export default function Quiz() {
  const questions = [
    {
      questionText: 'What is a characteristic of Fixed Income investments?',
      answerOptions: ['Offer high returns with low risk', 'Typically yield around 12-15% returns', 'Include buying shares of companies', 'Provide a safe investment option with modest returns around 5-10%'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'Which entity ensures guaranteed settlement of trades in the stock market?',
      answerOptions: ['Stock Brokers', 'Bank', 'Foreign Institutional Investors (FIIs)', 'NSE Clearing Limited and ICCL'],
      correctAnswerIndex: 3,
    },
    {
      questionText: 'What is the primary goal of traders in the Futures market?',
      answerOptions: ['Ensuring physical delivery of goods', 'Mitigating risks associated with liquidity and default', 'Gaining financial profits based on directional views of asset prices', 'Engaging in agreements between buyers and sellers for cash exchange'],
      correctAnswerIndex: 2,
    },
    {
        questionText: 'What is a key characteristic of leverage in futures trading?',
        answerOptions: ['It reduces potential returns but lowers risk', 'It allows control of larger positions with less capital', 'It has no impact on potential profits or losses', 'It guarantees a fixed rate of return regardless of market movements'],
        correctAnswerIndex: 1,
    },
    {
        questionText: 'What is a fundamental principle in finance illustrated by choosing to receive Rs.10,000 immediately or in two years?',
        answerOptions: ['The time value of money', 'The concept of leverage', 'The principle of compounding', 'The concept of present value'],
        correctAnswerIndex: 0,
    },
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleAnswerSelected = (questionIndex, answerIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      const selectedAnswerIndex = selectedAnswers[index];
      if (selectedAnswerIndex !== null && selectedAnswerIndex === question.correctAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmitQuiz = () => {
    const userScore = calculateScore();
    setScore(userScore);
    exportToCSV();
  };

  const exportToCSV = () => {
    const csvContent = questions.map((question, index) => {
      const selectedAnswerIndex = selectedAnswers[index];
      const selectedAnswer = selectedAnswerIndex !== null ? question.answerOptions[selectedAnswerIndex] : '';
      return `"${question.questionText}", "${selectedAnswer}"`;
    }).join('\n');

    const csvBlob = new Blob([csvContent], { type: 'text/csv' });
    const csvURL = window.URL.createObjectURL(csvBlob);
    const tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', 'quiz_answers.csv');
    document.body.appendChild(tempLink);
    tempLink.click();
    document.body.removeChild(tempLink);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz</h1>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="question-container">
          <h2 className="question-text">{question.questionText}</h2>
          <div className="answer-options">
            {question.answerOptions.map((option, optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleAnswerSelected(questionIndex, optionIndex)}
                className={`option-button ${selectedAnswers[questionIndex] === optionIndex ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmitQuiz} className="submit-button">Submit Quiz and Export Answers to CSV</button>
      {score !== null && <p className="score-text">Your score: {score}/{questions.length}</p>}
    </div>
  );
}

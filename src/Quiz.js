import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    {
      question: "A 2020 Porsche Taycan 4S cost $155k new. How much do you think it costs now (2024)?",
      options: ["$55,000", "$75,000", "$100,000", "$125,000"],
      answer: "$57,000",
      originalPrice: 155000,
      currentPrice: 57000,
      image: "/images/porsche_taycan.avif"
    },
    {
      question: "A 2017 BMW M760i xDrive had a starting price of $157k. What’s its estimated value now (2024)?",
      options: ["$35,000", "$45,000", "$55,000", "$65,000"],
      answer: "$47,000",
      originalPrice: 157000,
      currentPrice: 47000,
      image: "/images/2020_bmw_7_series.avif"
    },
    {
      question: "How much does a 2021 Ford Bronco 4-cylinder manual cost now if it was $41k new?",
      options: ["$30k", "$36k", "$40k", "$46k"],
      answer: "$36k",
      originalPrice: 41000,
      currentPrice: 36000,
      image: "/images/2021_Ford_Bronco Black_Diamond.jpg"
    },
    {
      question: "How much does a 2023 Lamborghini Huracan STO cost now if it was $415k new?",
      options: ["$325k", "$365k", "$405k", "$445k"],
      answer: "$364k",
      originalPrice: 415000,
      currentPrice: 364000,
      image: "/images/huracan-sto-1.jpg"
    },
    {
      question: "How much does a 2019 Mazda Miata cost now if it was $38k new?",
      options: ["$19k", "$25k", "$30k", "$35k"],
      answer: "$25k",
      originalPrice: 38000,
      currentPrice: 25000,
      image: "/images/2019 Mazda MX-5 Miata RF Club.jpg"
    },
    {
      question: "How much does a 2023 Toyota GR86 Premium cost now if it was $32k new?",
      options: ["$21k", "$24k", "$27k", "$30k"],
      answer: "$30k",
      originalPrice: 32000,
      currentPrice: 30000,
      image: "/images/Toyota GR86 Premium.jpg"
    },
    {
      question: "How much does a 2010 Cadillac Escalade cost now if it was $65k new?",
      options: ["$5k", "$15k", "$25k", "$30k"],
      answer: "$15k",
      originalPrice: 65000,
      currentPrice: 15000,
      image: "/images/2010 Cadillac Escalade VIN 1GYUKAEF6AR264748.jpg"
    },
    {
      question: "How much does a 2021 Corvette C8 Stingray 3LT cost now if it was $76k new?",
      options: ["$46k", "$56k", "$66k", "$76k"],
      answer: "$56k",
      originalPrice: 76000,
      currentPrice: 56000,
      image: "/images/Chevrolet Corvette Stingray 1G1YC2D41M5111290.jpg"
    },
    {
      question: "How much does a 2021 Ram 1500 TRX cost now if it was $91k new?",
      options: ["$70k", "$75k", "$80k", "$85k"],
      answer: "$70k",
      originalPrice: 91000,
      currentPrice: 70000,
      image: "/images/2021 Ram 1500 TRX.jpg"
    },
    {
      question: "How much does a 2023 Porsche 911 GT3 RS cost now if it was $289k new?",
      options: ["$261k", "$301k", "$381k", "$421k"],
      answer: "$420,696",
      originalPrice: 289000,
      currentPrice: 420696,
      image: "/images/IMGL0899-HDR.avif"
    }
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    const question = questions[currentQuestion];
    const correctAnswer = question.answer;

    // Check if the selected answer is correct
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    // Calculate depreciation percentage
    const depreciation = Math.round(((question.originalPrice - question.currentPrice) / question.originalPrice) * 100);
    const message = `This car has depreciated ${depreciation}% since new!`;

    // Set the feedback message and show it
    setFeedbackMessage(message);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);  // Hide feedback before moving to the next question
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // End the quiz or reset the game here
      alert(`Quiz finished! Your final score is ${score}/${questions.length}.`);
      setCurrentQuestion(0);  // Optionally reset to the first question
      setScore(0);  // Optionally reset the score
    }
  };

  return (
    <div className="quiz-container">
      <div className="question-section">
        <div className="question-image">
          <img src={questions[currentQuestion].image} alt="car" className="car-image" />
        </div>
        <div className="question-text">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className="option-button"
                onClick={() => handleAnswerOptionClick(option)}
                disabled={showFeedback}  // Disable buttons after selecting an option
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {showFeedback && (
        <div className="feedback-section">
          {isCorrect ? <p>Correct! {feedbackMessage}</p> : <p>Incorrect! {feedbackMessage}</p>}
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}

      <div className="score-section">
        <p>Score: {score}</p>
      </div>
    </div>
  );
};

export default Quiz;
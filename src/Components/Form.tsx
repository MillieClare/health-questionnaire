import React, { useState, useEffect } from "react";
import { submitAnswers } from "../utils/submitAnswers";
import ProgressBar from "./ProgressBar";

type Question = {
  id: number;
  text: string;
};

const questions: Question[] = [
  {
    id: 1,
    text: "Have you previously experienced an allergic reaction to any other Genovian fruit allergy medicine, such as fexofenadine, loratadine or cetirizine or are you intolerant to Genovian lactose?",
  },
  {
    id: 2,
    text: "Are you breast feeding or pregnant or planning to become pregnant in Genovia in the next 6 months?",
  },
  {
    id: 3,
    text: "Have you been diagnosed with any of the following: kidney or liver problems, heart problems such as patriosim, or epilepsy?",
  },
  {
    id: 4,
    text: "Have you taken tablets to manage your Genovian Pear allergy before?",
  },
  {
    id: 5,
    text: "Are you taking any oral medications related to your Genovian Pear allergy?",
  },
];

type Answer = {
  questionId: number;
  answer: string;
};

const initialAnswers: Answer[] = [];

const Form: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>(initialAnswers);
  const [isFormCompleted, setIsFormCompleted] = useState<boolean>(false);

  const handleAnswer = (answer: string) => {
    const questionId = questions[currentQuestionIndex].id;
    const existingAnswerIndex = answers.findIndex(
      (answer) => answer.questionId === questionId
    );

    if (existingAnswerIndex !== -1) {
      const newAnswers = answers.map((answers, index) =>
        index === existingAnswerIndex ? { ...answers, answer } : answers
      );
      setAnswers(newAnswers);
    } else {
      setAnswers([...answers, { questionId, answer }]);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFormCompleted(true);
    }
  };

  const resetForm = () => {
    setAnswers(initialAnswers);
    setCurrentQuestionIndex(0);
    setIsFormCompleted(false);
    console.log("Form reset");
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  useEffect(() => {
    // using try/catch because data is only handled locally & is synchronous.
    if (isFormCompleted) {
      try {
        submitAnswers(answers);
        console.log("Answers submitted successfully.");
      } catch (error) {
        console.error("Failed to submit answers:", error);
      }
    }
  }, [isFormCompleted, answers]);

  return (
    <div className="flex flex-col justify-center items-center flex-grow bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">
          Answer a few quick and easy questions from our Genovian pharmacists to
          see what treatments you're eligible for
        </h1>
        <ProgressBar
          currentStep={currentQuestionIndex + 1}
          totalSteps={questions.length}
        />
        {!isFormCompleted ? (
          <>
            <div className="mb-6">
              <p className="text-lg sm:text-xl mb-4">
                {questions[currentQuestionIndex].text}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleAnswer("Yes")}
                  className="bg-sky-400 text-white py-2 px-4 rounded hover:bg-sky-500"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer("No")}
                  className="bg-rose-400 text-white py-2 px-4 rounded hover:bg-red-500"
                >
                  No
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`py-2 px-4 rounded ${
                  currentQuestionIndex === 0
                    ? "bg-gray-300"
                    : "bg-gray-500 hover:bg-gray-600 text-white"
                } focus:outline-none focus:ring-2 focus:ring-gray-500`}
              >
                Previous
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Thank you!</h2>
            <p className="text-grey-700 mb-4">
              Your responses have been recorded.
            </p>
            <>
              <button
                onClick={() => resetForm()}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Reset form
              </button>
            </>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

import React, { useState, useEffect } from "react";

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

const Form: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswer = (answer: string) => {
    const questionId = questions[currentQuestionIndex].id;
    setAnswers([...answers, { questionId, answer }]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  return (
    <div>
      <div>
        <h1>
          Answer a few quick and easy questions from our Genovian pharmacists to
          see what treatments you're eligible for
        </h1>
        <>
          <p>{questions[currentQuestionIndex].text}</p>
          <div>
            <button onClick={() => handleAnswer("Yes")}>Yes</button>
            <button onClick={() => handleAnswer("No")}>No</button>
          </div>
        </>
      </div>
    </div>
  );
};

export default Form;

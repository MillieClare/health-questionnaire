export const submitAnswers = (
  answers: { questionId: number; answer: string }[]
) => {
  console.log("Submitting the following consultation answers");
  console.log(JSON.stringify(answers, null, 2));
};

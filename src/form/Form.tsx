import { useCallback, useState } from "react";
import { QuestionData, Question, questions } from "./questions";

export interface FormProps {
  onEnd: (result: number) => void;
}
const maxValue = 5;
export const Form = ({ onEnd }: FormProps) => {
  const [questionData, setQuestionData] = useState<
    Record<string, QuestionData>
  >({});
  const [questionIndex, setQuestionIndex] = useState(0);

  const onQuestionClick = useCallback(
    (e: number, question: Question) => {
      setQuestionData((prev) => ({
        ...prev,
        [question.id]: { questionId: question.id, value: e },
      }));
      if (questionIndex >= questions.length - 1) {
        const resultValues = Object.values(questionData);
        const result =
          resultValues.reduce((prev, curr) => prev + curr.value, 0) /
          resultValues.length;
        const percentageResult = result / (maxValue - 1);

        onEnd(percentageResult);
      } else {
        setQuestionIndex((prev) => prev + 1);
      }
    },
    [onEnd, questionData, questionIndex]
  );
  const onPreviousQuestion = useCallback(() => {
    setQuestionIndex(0);
    alert("TODO: fix previous question button not workng");
  }, []);

  const question = questions[questionIndex];

  return (
    <div>
      <h2>{question.title}</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Array(maxValue)
          .fill(0)
          .map((_, i) => {
            const option = question.options.find((x) => x.value === i);
            return (
              <div key={`${question.id}-${i}`}>
                <input
                  type="radio"
                  value={i}
                  name={question.title}
                  checked={questionData[question.id]?.value === i}
                  onChange={(e) =>
                    onQuestionClick(Number(e.target.value), question)
                  }
                />
                {option ? <div>{option.description}</div> : null}
              </div>
            );
          })}
      </div>
      <button onClick={onPreviousQuestion}>Previous question</button>
    </div>
  );
};

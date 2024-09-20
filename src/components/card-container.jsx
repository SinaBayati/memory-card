import { useState } from "react";
import { Card } from "./card";
import data from "./../data";
import "./../styles/card-container.css";

export function CardContainer() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [remainingIndices, setRemainingIndices] = useState([0,1,2,3,4]);

  let currentIndices = [];
  if(rounds !== 5){
    currentIndices = getIndices(remainingIndices);
  }

  // takes the remainingIndices argument so that it can include
  // at least one of the remaining indices in each round
  function getIndices(remainingIndices) {
    if(remainingIndices.length === 0) {
      return [];
    }

    const result = [];
    result.push(remainingIndices[getRandomIndex(remainingIndices.length)])

    while (result.length < 3) {
      const index = getRandomIndex(5);
      if(!result.includes(index)){
        result.push(index);
      }
    }

    return result;
  }

  function getRandomIndex(range = 1) {
    return Math.floor(Math.random() * range);
  }

  function clickHandler(selectedIndex) {
    if(rounds < 5) {
      setRounds(rounds + 1);
      setRemainingIndices(r => {
        const newRemainingIndices  = r.filter(i => i !== selectedIndex);
        const newCurrentScore = 5 - newRemainingIndices.length;
        setCurrentScore(newCurrentScore);
        if(newCurrentScore > bestScore){
          setBestScore(newCurrentScore);
        }
        return newRemainingIndices;
      });
    }
  }

  function restartGame() {
    setCurrentScore(0);
    setRounds(0);
    setRemainingIndices([0,1,2,3,4]);
  }

  return (
    <>
      <h2 className="center">Best Score: {bestScore}</h2>
      <h2 className="center">Current Score: {currentScore}</h2>
      <div className="card-container">
        {currentIndices.map((i) => {
          return(
            <Card
              key={i}
              onClick={() => clickHandler(i)}
              altText={data[i].altText}
              imageUrl={data[i].imageUrl}
            ></Card>
          );
        })}
        {rounds === 5 ? <button className="btn-restart" onClick={restartGame}>Restart</button> : null}
      </div>
      <h2 className="center mb-100">{rounds}/5 rounds</h2>
    </>
  );
}
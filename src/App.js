import React from "react";
import "./styles.css";
import { randomAPIresponse } from "./randomAPIresponse";
import { groupByReaction } from "./reactions";

export default function App() {
  //to console log it required format
  const randomReactionsWithType = randomAPIresponse();
  const reactionsWithType = groupByReaction(randomReactionsWithType, "type");
  console.log(reactionsWithType);

  //to  render it 
  const randomReactions = randomAPIresponse();
  const reactions = groupByReaction(randomReactions, "content");
  console.log(reactions);
  let mapToReactions = [];
  for (let [key, value] of Object.entries(reactions)) {
    mapToReactions.push({ raection: key, names: value });
  }

  return (
    <div className="App">
      <h1>ASOSIO</h1>
      <h2>Developed by Hakki Suman</h2>
      <div id="root">
        <h2>Reactions</h2>
        <ul>
          {mapToReactions.map(item => {
            return (
              <li key={item.raection}>
                {item.raection}{" "}
                {item.names.length === 1 ? "" : `  x ${item.names.length}`}
                <div>
                  {item.names.map(name => {
                    return name.name + ", ";
                  })}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

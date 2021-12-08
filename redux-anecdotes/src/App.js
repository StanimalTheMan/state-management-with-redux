import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voteFor, createAnecdote } from "./reducers/anecdoteReducer";
import AnecdoteForm from "./components/AnecdoteForm";

const App = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteFor(id));
  };

  const sortedAnecdotes = anecdotes
    .sort((a, b) => b.votes - a.votes)
    .map((anecdote) => (
      <div key={anecdote.id}>
        <div>{anecdote.content}</div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    ))
    .sort((a, b) => b.votes - a.votes);

  console.log(anecdotes, sortedAnecdotes);

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes}
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;

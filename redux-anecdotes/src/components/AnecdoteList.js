import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { voteFor } from "../reducers/anecdoteReducer";
import {
  setNotification,
  removeNotification,
} from "../reducers/notificationReducer";

function AnecdoteList() {
  const anecdotes = useSelector((state) =>
    state.anecdotes.filter((anecdote) => {
      return anecdote.content
        .toLowerCase()
        .includes(state.filter.toLowerCase());
    })
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(voteFor(id, anecdote));
    dispatch(setNotification(`you voted '${anecdote.content}'`));
    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
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

  return <div>{sortedAnecdotes}</div>;
}

export default AnecdoteList;

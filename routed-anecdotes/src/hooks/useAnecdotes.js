import { useState, useEffect } from 'react'
import anecdoteService from '../services/anecdotes'

const useAnecdotes = () => {
    const [anecdotes, setAnecdotes] = useState([])

    useEffect(() => {
        anecdoteService.getAll().then(anecdotes => setAnecdotes(anecdotes))
    }, [])

    const createAnecdote = (anecdote) => {
        anecdoteService.createNew(anecdote).then(createdAnecdote => {
            setAnecdotes([...anecdotes, createdAnecdote])
        })
    }

    return { anecdotes, createAnecdote }
}

export default useAnecdotes
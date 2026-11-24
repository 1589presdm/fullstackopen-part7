import { useState, useEffect } from 'react'
import anecdoteService from '../services/anecdotes'

const useAnecdotes = () => {
    const [anecdotes, setAnecdotes] = useState([])

    useEffect(() => {
        anecdoteService.getAll().then(anecdotes => setAnecdotes(anecdotes))
    }, [])

    const createAnecdote = (anecdote) => {
         return anecdoteService.createNew(anecdote).then(createdAnecdote => {
            setAnecdotes([...anecdotes, createdAnecdote])
        })
    }

    const deleteAnecdote = (id) => {
        anecdoteService.remove(id).then(() => {
            setAnecdotes(anecdotes.filter(a => a.id !== id))
        })
    }

    return { anecdotes, createAnecdote, deleteAnecdote }
}

export default useAnecdotes
import { useState, useEffect } from 'react'
import anecdoteService from '../services/anecdotes'

export const useAnecdotes = () => {
    const [anecdotes, setAnecdotes] = useState([])

    useEffect(() => {
        anecdoteService.getAll().then(anecdotes => setAnecdotes(anecdotes))
    }, [])

    const addAnecdote = (anecdote) => {
         return anecdoteService.createNew(anecdote).then(createdAnecdote => {
            setAnecdotes([...anecdotes, createdAnecdote])
        })
    }

    const deleteAnecdote = (id) => {
        anecdoteService.remove(id).then(() => {
            setAnecdotes(anecdotes.filter(a => a.id !== id))
        })
    }

    return { anecdotes, addAnecdote, deleteAnecdote }
}

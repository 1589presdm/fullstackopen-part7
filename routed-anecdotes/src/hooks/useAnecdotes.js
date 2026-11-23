import { useState, useEffect } from 'react'
import anecdoteService from '../services/anecdotes'

const useAnecdotes = () => {
    const [anecdotes, setAnecdotes] = useState([])

    useEffect(() => {
        anecdoteService.getAll().then(anecdotes => setAnecdotes(anecdotes))
    }, [])

    return { anecdotes }
}

export default useAnecdotes
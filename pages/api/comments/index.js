import {comments} from '../../../data/comments'

export default function handler(req, res) {
    if(req.method === 'GET'){
    res.status(200).json(comments)
    } else if (req.method === 'POST'){
        const word = req.body.word
        const wordType = req.body.wordType
        const pronounce = req.body.pronounce
        const meaning = req.body.meaning
        const newWord = {
            id: Date.now(),
            word: word,
            wordType: wordType,
            pronounce: pronounce,
            meaning: meaning
        }
        comments.push(newWord)
        res.status(201).json(newWord)
    }
}
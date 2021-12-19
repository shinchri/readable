import React from 'react'

import { vote } from './commentsSlice'
import { useDispatch } from 'react-redux'

export const VoteButtons = ({comment}) => {

    const dispatch = useDispatch()

    const onVoteClick = e => {
        const name = e.target.id

        const params = {
            id: comment.id,
            option: {
                option: name
            }
        }

        try {
            dispatch(vote(params)).unwrap()
        } catch (err) {
            console.log('Error Happened: ', err)
        }
    }

    return (
        <div className="score-div">
            <span className="votescore">Vote Score: {comment.voteScore}</span>
            <span className="thumbs" id="upVote" name="upVote" onClick={onVoteClick}>&#128077; vote up</span>
            <span className="thumbs" id="downVote" name="downVote" onClick={onVoteClick}>&#128078; vote down</span>
        </div>
    )
}
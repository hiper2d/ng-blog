package com.hiper2d.repository.comment

import com.hiper2d.model.Comment

interface CommentRepositoryCustom {
    fun saveComment(comment: Comment)
}
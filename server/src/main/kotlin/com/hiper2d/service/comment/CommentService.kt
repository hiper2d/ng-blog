package com.hiper2d.service.comment

import com.hiper2d.model.Comment

interface CommentService {
    fun getCommentsForRecord(recordId: String): List<Comment>
    fun saveComment(comment: Comment): Comment
}


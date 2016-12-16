package com.hiper2d.service.comment

import com.hiper2d.model.Comment
import com.hiper2d.repository.comment.CommentRepository
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class CommentServiceImpl @Autowired constructor(val commentRepository: CommentRepository) : CommentService {
    override fun saveComment(comment: Comment) = commentRepository.saveComment(comment)
    override fun getCommentsForRecord(recordId: String) = commentRepository.findByRecordId(recordId)
}


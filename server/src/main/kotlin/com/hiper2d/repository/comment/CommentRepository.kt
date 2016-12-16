package com.hiper2d.repository.comment

import com.hiper2d.model.Comment
import org.springframework.data.mongodb.repository.MongoRepository

interface CommentRepository : MongoRepository<Comment, String>, CommentRepositoryCustom {
    fun findByRecordId(recordId: String): List<Comment>
}
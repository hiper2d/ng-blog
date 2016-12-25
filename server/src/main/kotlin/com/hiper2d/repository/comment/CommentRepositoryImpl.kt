package com.hiper2d.repository.comment

import com.hiper2d.model.Comment
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate

class CommentRepositoryImpl
@Autowired constructor(val mongoTemplate: MongoTemplate) : CommentRepositoryCustom {
    override fun saveComment(comment: Comment): Comment {
        mongoTemplate.save(comment)
        return comment
    }
}
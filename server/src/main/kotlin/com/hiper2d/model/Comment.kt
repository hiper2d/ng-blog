package com.hiper2d.model

import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Comment (
        @Id val id: String,
        val recordId: ObjectId,
        val content: String
)
package com.hiper2d.model

import org.bson.types.ObjectId

data class Comment (
        val id: ObjectId,
        val recordId: ObjectId,
        val content: String
)
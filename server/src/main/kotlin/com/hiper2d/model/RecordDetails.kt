package com.hiper2d.model

import org.bson.types.ObjectId

data class RecordDetails(
        val id: ObjectId,
        val shortRecordId: ObjectId,
        val content: String
)
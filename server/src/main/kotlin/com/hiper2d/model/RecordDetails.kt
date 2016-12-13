package com.hiper2d.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.index.Indexed
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class RecordDetails(
        @Id val id: String,
        val shortRecordId: String,
        @Indexed val content: String
)
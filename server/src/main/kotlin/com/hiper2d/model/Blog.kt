package com.hiper2d.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Blog(
        @Id val id: String,
        val title: String,
        val content: String,
        val color: String
)
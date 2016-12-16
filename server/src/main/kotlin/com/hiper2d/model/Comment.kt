package com.hiper2d.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate

@Document
data class Comment (
        @Id val id: String?,
        val recordId: String,
        val content: String,
        val date: LocalDate?
)
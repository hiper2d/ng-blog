package com.hiper2d.model

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.format.annotation.DateTimeFormat
import java.time.LocalDate

@Document
data class Record (
        @Id val id: String?,
        val title: String,
        val content: String?,
        val description: String?,
        @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) val date: LocalDate?
)
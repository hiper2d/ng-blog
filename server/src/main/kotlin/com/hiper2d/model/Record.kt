package com.hiper2d.model

import org.springframework.data.mongodb.core.mapping.Document
import java.time.LocalDate

@Document
data class Record (
        val id: String,
        val title: String,
        val description: String,
        val date: LocalDate
)
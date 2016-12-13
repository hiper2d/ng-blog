package com.hiper2d.repository

import com.hiper2d.model.Record

interface CustomRecordsRepository {
    fun saveRecord(record: Record)
}
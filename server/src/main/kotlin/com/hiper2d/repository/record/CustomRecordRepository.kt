package com.hiper2d.repository.record

import com.hiper2d.model.Record

interface CustomRecordRepository {
    fun saveRecord(record: Record): Record
}
package com.hiper2d.service.record

import com.hiper2d.model.Record

interface RecordsService {
    fun getAllRecordsWithoutContent() : List<Record>
    fun getRecord(id: String) : Record
    fun saveRecord(record: Record): Record
}
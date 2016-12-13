package com.hiper2d.service

import com.hiper2d.model.Record
import com.hiper2d.model.RecordDetails

interface RecordsService {
    fun getAllRecords() : List<Record>
    fun getRecordDetail(recordId: String) : RecordDetails
}
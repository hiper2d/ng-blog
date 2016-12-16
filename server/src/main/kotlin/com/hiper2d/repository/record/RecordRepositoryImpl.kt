package com.hiper2d.repository.record

import com.hiper2d.model.Record
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate

class RecordRepositoryImpl @Autowired constructor(val mongoTemplate: MongoTemplate) : CustomRecordRepository {
    override fun saveRecord(record: Record) {
        mongoTemplate.save(record)
    }
}
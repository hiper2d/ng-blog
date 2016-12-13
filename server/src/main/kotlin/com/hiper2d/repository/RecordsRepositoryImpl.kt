package com.hiper2d.repository

import com.hiper2d.model.Record
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate

class RecordsRepositoryImpl @Autowired constructor(val mongoTemplate: MongoTemplate) : CustomRecordsRepository {
    override fun saveRecord(record: Record) {
        mongoTemplate.save(record)
    }
}
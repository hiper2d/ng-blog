package com.hiper2d.repository.record

import com.hiper2d.model.Record
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query

interface RecordRepository : MongoRepository<Record, String>, CustomRecordRepository {
    @Query(value = "{}", fields = "{'content':0}")
    fun findAllWithoutContent() : List<Record>

    fun findById(id: ObjectId): Record
}
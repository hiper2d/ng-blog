package com.hiper2d.repository

import com.hiper2d.model.RecordDetails
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository

interface RecordDetailsRepository : MongoRepository<RecordDetails, String> {
    fun findByShortRecordId(recordId: ObjectId): RecordDetails
}
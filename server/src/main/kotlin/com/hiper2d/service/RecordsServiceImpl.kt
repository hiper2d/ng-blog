package com.hiper2d.service

import com.hiper2d.model.Record
import com.hiper2d.model.RecordDetails
import com.hiper2d.repository.RecordDetailsRepository
import com.hiper2d.repository.RecordsRepository
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class RecordsServiceImpl
@Autowired constructor(
        val recordsRepository: RecordsRepository,
        val recordDetailsRepository: RecordDetailsRepository
): RecordsService {
    override fun getAllRecords(): List<Record> {
        return recordsRepository.findAll()
    }

    override fun getRecordDetail(shortRecordId: String): RecordDetails {
        return recordDetailsRepository.findByShortRecordId(ObjectId(shortRecordId))
    }
}
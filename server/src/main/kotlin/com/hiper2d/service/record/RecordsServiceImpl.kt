package com.hiper2d.service.record

import com.hiper2d.model.Record
import com.hiper2d.repository.record.RecordRepository
import org.bson.types.ObjectId
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service class RecordsServiceImpl
@Autowired constructor(val recordRepository: RecordRepository) : RecordsService {

    override fun getAllRecordsWithoutContent(): List<Record> {
        return recordRepository.findAllWithoutContent()
    }

    override fun getRecord(id: String): Record {
        return recordRepository.findById(ObjectId(id))
    }

    override fun saveRecord(record: Record) {
        recordRepository.saveRecord(record)
    }
}
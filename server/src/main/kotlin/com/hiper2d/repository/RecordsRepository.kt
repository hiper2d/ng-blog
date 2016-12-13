package com.hiper2d.repository

import com.hiper2d.model.Record
import org.springframework.data.mongodb.repository.MongoRepository

interface RecordsRepository : MongoRepository<Record, String>
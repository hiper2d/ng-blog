package com.hiper2d.controllers

import com.hiper2d.model.Record
import com.hiper2d.service.record.RecordsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/blog")
@CrossOrigin(origins = arrayOf("http://localhost:3001", "chrome-extension://cokgbflfommojglbmbpenpphppikmonn")) // read about CORS and Chrome Console
class BlogController
@Autowired constructor(
        val recordsService: RecordsService
) {
    @GetMapping
    fun getAllRecords(): List<Record> = recordsService.getAllRecordsWithoutContent()

    @GetMapping("/record")
    fun getRecord(@RequestParam(value = "id") recordId: String) = recordsService.getRecord(recordId)

    @PostMapping("/record")
    fun saveRecord(@RequestBody record: Record) {
        recordsService.saveRecord(record)
    }
}
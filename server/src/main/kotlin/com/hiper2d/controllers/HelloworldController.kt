package com.hiper2d.controllers

import com.hiper2d.model.Helloworlder
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.concurrent.atomic.AtomicLong

@RestController
class HelloworldController {

    val counter = AtomicLong()

    @RequestMapping("/helloworld")
    fun helloworld(@RequestParam(value = "name", defaultValue = "Anonymous User") name: String) = Helloworlder(counter.incrementAndGet(), name)
}


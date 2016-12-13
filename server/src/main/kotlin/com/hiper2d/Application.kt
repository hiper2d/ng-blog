package com.hiper2d

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder
import com.fasterxml.jackson.module.kotlin.*

@SpringBootApplication
open class Application {
    @Bean
    open fun objectMapperBuilder(): Jackson2ObjectMapperBuilder = Jackson2ObjectMapperBuilder().modulesToInstall(KotlinModule())
}

fun main(args: Array<String>) {
    SpringApplication.run(Application::class.java, *args)
}


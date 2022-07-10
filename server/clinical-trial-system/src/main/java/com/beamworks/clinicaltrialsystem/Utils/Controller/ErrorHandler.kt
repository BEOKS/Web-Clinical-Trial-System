package com.beamworks.clinicaltrialsystem.Utils.Controller

import org.springframework.http.ResponseEntity

fun errorHandler(method : ()-> ResponseEntity<Any>): ResponseEntity<Any> {
    return try {
        method()
    }catch (e: InternalError){
        ResponseEntity.internalServerError().body(e.message)
    }catch (e: IllegalArgumentException){
        ResponseEntity.badRequest().body(e.message)
    }
}
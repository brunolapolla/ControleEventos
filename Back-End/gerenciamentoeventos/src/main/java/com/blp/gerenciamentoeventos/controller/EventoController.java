package com.blp.gerenciamentoeventos.controller;

import com.blp.gerenciamentoeventos.model.Evento;
import com.blp.gerenciamentoeventos.service.EventoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/eventos")
public class EventoController {

    @Autowired
    EventoService eventoService;

    @PostMapping
    public Evento createEvento(@RequestBody Evento evento) {
        return eventoService.saveEvento(evento);
    }

    @GetMapping
    public List<Evento> getEventoList(){
        return eventoService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evento> getEventoById(@PathVariable("id") Long id) throws Exception{
        return ResponseEntity.ok(eventoService.getByID(id).orElseThrow(() -> new Exception("Evento não encontrado")));
    }

    @PutMapping("/{id}")
    public Evento updateEvento(@RequestBody Evento evento) {
        return eventoService.updateEvento(evento);
    }

    @DeleteMapping("/{id}")
    public Map< String, Boolean > deleteEventoById(@PathVariable(value = "id") Long id) throws Exception {

            Evento evento = eventoService.getByID(id).orElseThrow(() -> new Exception("Evento não encontrado :: " + id));
            eventoService.deleteByID(id);
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return response;


    }

}

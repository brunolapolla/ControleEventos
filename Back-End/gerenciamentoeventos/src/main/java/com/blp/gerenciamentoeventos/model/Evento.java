package com.blp.gerenciamentoeventos.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table (name = "Evento")
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String nomeEvento;
    @Column
    private String localEvento;
    @Column
    private String dataEvento;
    @Column
    private String horarioInicio;
    @Column
    private String horarioFim;
    @Column
    private Integer quantidadeParticipantes;
    @Column 
    private String nomeOrganizador;


}

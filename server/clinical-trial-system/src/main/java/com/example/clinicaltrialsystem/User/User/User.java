package com.example.clinicaltrialsystem.User.User;

import lombok.AllArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="USER")
@Inheritance(strategy = InheritanceType.JOINED)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    protected String name;
    @Column(unique = true)
    protected String email;

}

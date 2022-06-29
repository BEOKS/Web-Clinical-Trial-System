package com.example.clinicaltrialsystem.Project;

import com.example.clinicaltrialsystem.User.PI.PI;
import com.example.clinicaltrialsystem.User.Reviewer.Reviewer;
import lombok.AllArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @OneToOne
    private PI manager;
    @OneToMany
    private List<Reviewer> reviewer;
}

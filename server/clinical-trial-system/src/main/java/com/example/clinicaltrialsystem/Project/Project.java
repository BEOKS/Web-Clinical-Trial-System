package com.example.clinicaltrialsystem.Project;

import com.example.clinicaltrialsystem.User.PI.PI;
import com.example.clinicaltrialsystem.User.Reviewer.Reviewer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Entity
@AllArgsConstructor
@Getter
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @OneToOne
    private PI manager;
    @OneToMany
    private List<Reviewer> reviewer;

    public Project() {

    }

    public static Project createSampleProject(){
        return new Project();
    }

    public JsonNode toJsonNode(){
        ObjectMapper objectMapper=new ObjectMapper();
        return objectMapper.valueToTree(this);
    }
}

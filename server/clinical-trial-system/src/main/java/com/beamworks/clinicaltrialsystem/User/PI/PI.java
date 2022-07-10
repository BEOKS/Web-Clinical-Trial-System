package com.beamworks.clinicaltrialsystem.User.PI;


import com.beamworks.clinicaltrialsystem.User.User.UserProfile;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class PI {
    @OneToOne
    protected UserProfile userProfile;
    @Id
    private Long id;


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}

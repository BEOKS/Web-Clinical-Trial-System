package com.beamworks.clinicaltrialsystem.User.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<UserProfile,Long> {
}

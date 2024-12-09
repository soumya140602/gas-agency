package com.cat.GasAgencyBackend.Repository;

import com.cat.GasAgencyBackend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface Userrepo extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);
}

package com.cat.GasAgencyBackend.Service;

import com.cat.GasAgencyBackend.Model.User;

import java.util.List;

public interface UserService {
    boolean verifyUser(String email, String password) ;

    boolean saveUser(User user);

    List<User> getuser();
}

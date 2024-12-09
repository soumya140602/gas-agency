package com.cat.GasAgencyBackend.Service;

import com.cat.GasAgencyBackend.Model.User;
import com.cat.GasAgencyBackend.Repository.Userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService
{
    @Autowired
    Userrepo repo;
    @Override
    public boolean saveUser(User user) {
        try{
           User user1= repo.save(user);
           if(user1!=null)
               return true;
           else
               return false;
        }

        catch (Exception e)
        {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public List<User> getuser() {
        return repo.findAll();
    }

    @Override
    public boolean verifyUser(String email, String password) {
        // Fetch user from the database by email
        Optional<User> userOpt = repo.findByEmail(email);

        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // Check if the password matches (assuming password is stored in plaintext; it's better to use hashing in production)
            return user.getPassword().equals(password);
        }
        return false; // No user found with that email
    }
}

package com.cat.GasAgencyBackend.Controller;

import com.cat.GasAgencyBackend.Model.User;
import com.cat.GasAgencyBackend.Repository.Userrepo;
import com.cat.GasAgencyBackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path="/user")
public class AgencyControl
{

    @Autowired
    UserService userserve;

    @CrossOrigin(origins="http://127.0.0.1:5500")
    @GetMapping(path = "/getusers")
    @ResponseBody
    public List<User> getAllUser()
    {
        System.out.print("accessed");
        return userserve.getuser();
    }

    @CrossOrigin(origins="http://127.0.0.1:5500")
    @PostMapping(path="/adduser")
    @ResponseBody
    public ResponseEntity<String> adduser(User user)
    {
       if( userserve.saveUser(user))
       {
           return new ResponseEntity<>("Success", HttpStatus.OK);
       }
       else
       {
           return new ResponseEntity<>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

    @CrossOrigin(origins="http://127.0.0.1:5500")
    @PostMapping("/verify")
    public ResponseEntity<Map<String, Object>> verifyCredentials(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email").toLowerCase();
        String password = credentials.get("password");

        // Assuming your UserService has a method to check if email and password match a user in the database
        boolean isValid = userserve.verifyUser(email, password);

        Map<String, Object> response = new HashMap<>();
        if (isValid) {
            response.put("success", true);
        } else {
            response.put("success", false);
        }

        return ResponseEntity.ok(response);
    }
}

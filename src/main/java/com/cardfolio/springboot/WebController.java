package com.cardfolio.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
	
	@GetMapping(value = {"/", "/card", "/chart", "/company", "/cashback", "/event", "/contents", "/premium", "/mileage", "/hotel", "/cardCover"})
    public String redirect() {
        return "forward:/index.html";
    }
}

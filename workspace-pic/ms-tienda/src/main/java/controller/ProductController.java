package controller;

import model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import services.ProductService;

import java.util.List;

@RestController
@RequestMapping("/products") //localhost:8080/products
public class ProductController {
    @Autowired
    private ProductService services;
    @GetMapping("/")//localhost:8080/products/
    public List<Product> listAll(){
        return services.getAllProducts();
    }

}

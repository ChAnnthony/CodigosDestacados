package ec.edu.espe.tienda.controller;

import ec.edu.espe.tienda.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ec.edu.espe.tienda.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/") //localhost:8080/
@CrossOrigin("*")//permite que cualquier cliente se conecte a este controlador
public class ProductController {
    @Autowired
    private ProductService services;

    @GetMapping("/products")//localhost:8080/products
    public List<Product> listAll(){
        return services.getAllProducts();
    }

    @GetMapping("/") //localhost:8080/
    public List<Product> listAllRoot(){
        return services.getAllProducts();
    }
}
package ec.edu.espe.tienda.service;
import java.util.List;
import java.util.Optional;

import ec.edu.espe.tienda.model.Product;

public interface ProductService {
    List<Product> getAllProducts();
    Product saveProduct(Product product) throws Exception;
    Optional<Product> getById(Long id);
}

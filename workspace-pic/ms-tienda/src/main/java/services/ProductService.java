package services;
import java.util.List;
import java.util.Optional;

import model.Product;
public interface ProductService {
    List<Product> getAllProducts();
    Product saveProduct(Product product) throws Exception;
    Optional<Product> getById(Long id);
}

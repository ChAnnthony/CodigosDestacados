package ec.edu.espe.tienda.services.impl;
import ec.edu.espe.tienda.model.Product;
import ec.edu.espe.tienda.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import ec.edu.espe.tienda.repository.RepositoryProduct;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class ProductServicesImpl implements ProductService {
    @Autowired
    private RepositoryProduct repositoryProduct;
    @Override
    public List<Product> getAllProducts() {
        return repositoryProduct.findAll();
    }
    @Override
    public Product saveProduct(Product product) throws Exception {
        if (product == null) {
            throw new Exception("Product is null");
        }
        return repositoryProduct.save(product);
    }
    @Override
    public Optional<Product> getById(Long id) {
        return repositoryProduct.findById(id);
    }

}

package ec.edu.espe.tienda.repository;

import ec.edu.espe.tienda.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryProduct extends JpaRepository<Product, Long> {

}

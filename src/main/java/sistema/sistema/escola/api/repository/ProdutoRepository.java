package sistema.sistema.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sistema.sistema.escola.api.model.ProdutoModel;

public interface ProdutoRepository extends JpaRepository<ProdutoModel, Long> {
}

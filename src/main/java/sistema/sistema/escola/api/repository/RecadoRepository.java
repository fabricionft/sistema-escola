package sistema.sistema.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sistema.sistema.escola.api.model.RecadoModel;

public interface RecadoRepository extends JpaRepository<RecadoModel, Integer> {
}

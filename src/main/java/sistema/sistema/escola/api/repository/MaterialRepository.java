package sistema.sistema.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sistema.sistema.escola.api.model.MaterialModel;

import java.util.List;

public interface MaterialRepository extends JpaRepository<MaterialModel, Integer> {

    @Query(value = "select * from materiais where turma = ?", nativeQuery = true)
    public List<MaterialModel> buscarMaterialPorSala(String turma);
}

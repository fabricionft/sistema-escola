package sistema.sistema.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sistema.sistema.escola.api.model.ProvaModel;

import java.util.List;

public interface ProvaRepository extends JpaRepository<ProvaModel, Integer> {

    @Query(value = "select * from provas where turma = ?", nativeQuery = true)
    List<ProvaModel> buscarPorSala(String turma);
}

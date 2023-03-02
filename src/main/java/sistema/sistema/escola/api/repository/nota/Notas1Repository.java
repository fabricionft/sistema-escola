package sistema.sistema.escola.api.repository.nota;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sistema.sistema.escola.api.model.nota.Notas1Model;

public interface Notas1Repository extends JpaRepository<Notas1Model, Long> {

    @Query(value = "select * from notas1 where codigo = ?", nativeQuery = true)
    public Notas1Model buscarPorID(Long codigo);
}

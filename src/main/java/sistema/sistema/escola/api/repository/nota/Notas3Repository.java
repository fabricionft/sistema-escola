package sistema.sistema.escola.api.repository.nota;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sistema.sistema.escola.api.model.nota.Notas3Model;

public interface Notas3Repository extends JpaRepository<Notas3Model, Long> {

    @Query(value = "select * from notas3 where codigo = ?", nativeQuery = true)
    public Notas3Model buscarPorID(Long codigo);
}

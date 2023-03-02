package sistema.sistema.escola.api.repository.nota;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sistema.sistema.escola.api.model.nota.Notas4Model;

public interface Notas4Repository extends JpaRepository<Notas4Model, Long> {

    @Query(value = "select * from notas4 where codigo = ?", nativeQuery = true)
    public Notas4Model buscarPorID(Long codigo);
}


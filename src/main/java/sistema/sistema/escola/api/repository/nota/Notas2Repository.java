package sistema.sistema.escola.api.repository.nota;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sistema.sistema.escola.api.model.nota.Notas2Model;

public interface Notas2Repository extends JpaRepository<Notas2Model, Long> {

    @Query(value = "select * from notas2 where codigo = ?", nativeQuery = true)
    public Notas2Model buscarPorID(Long codigo);
}

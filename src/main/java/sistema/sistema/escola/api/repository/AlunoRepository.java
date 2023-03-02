package sistema.sistema.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sistema.sistema.escola.api.model.AlunoModel;
import java.util.List;

public interface AlunoRepository extends JpaRepository<AlunoModel, Integer> {

    @Query(value = "select * from alunos where usuario = ? and senha = ?", nativeQuery = true)
    public AlunoModel fazerLogin(String usuario, String senha);

    @Query(value = "select * from alunos where turma = ?", nativeQuery = true)
    public List<AlunoModel> bucsarPorSala(String turma);

    @Query(value = "select * from alunos where usuario = ?", nativeQuery = true)
    public AlunoModel buscarUsuarios(String usuario);
}

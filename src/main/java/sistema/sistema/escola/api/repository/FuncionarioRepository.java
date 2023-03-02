package sistema.sistema.escola.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sistema.sistema.escola.api.controller.FuncionarioController;
import sistema.sistema.escola.api.model.FuncionarioModel;

public interface FuncionarioRepository extends JpaRepository<FuncionarioModel, Long> {
    @Query(value = "select * from funcionarios where (usuario = ? and senha = ?)", nativeQuery = true)
    public FuncionarioModel fazerLogin(String usuario, String senha);
}

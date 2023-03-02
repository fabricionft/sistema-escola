package sistema.sistema.escola.api.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.FuncionarioModel;
import sistema.sistema.escola.api.repository.FuncionarioRepository;

@RestController
public class FuncionarioController {

    @Autowired
    public FuncionarioRepository repository;

    @GetMapping(path = "api/funcionario/listar")
    public List<FuncionarioModel> listar(){
        return repository.findAll();
    }

    @GetMapping(path = "api/funcionario/{}")
    public ResponseEntity buscar(@PathVariable ("codigo") Long codigo){
        return repository.findById(codigo)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(value = "loginFuncionario")
    @ResponseBody
    public FuncionarioModel logar(@RequestParam (name = "usuario") String usuario,
                                  @RequestParam (name = "senha") String senha){
        return  repository.fazerLogin(usuario, senha);
    }

    //Insere novo
    @PostMapping(value = "salvarFuncionario")
    public FuncionarioModel salvar(@RequestBody FuncionarioModel funcionario){
        return repository.save(funcionario);
    }

    //Edita
    @PutMapping(path = "/api/funcionario")
    public FuncionarioModel alterar(@RequestBody FuncionarioModel funcionario){
        return repository.save(funcionario);
    }

    //Exclui
    @DeleteMapping(value = "deletarFuncionario")
    @ResponseBody
    public void excluir(@RequestParam Long codigo){
        repository.deleteById(codigo);
    }
}

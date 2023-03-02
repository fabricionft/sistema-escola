package sistema.sistema.escola.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.AlunoModel;
import sistema.sistema.escola.api.repository.AlunoRepository;

import java.util.List;

@RestController
public class AlunoController {

    @Autowired
    private AlunoRepository repository;

    //Lista tudo
    @GetMapping(path = "/api/aluno/listar")
    public List<AlunoModel> listar(){
        return repository.findAll();
    }

    //Busca ID
    @GetMapping(value = "buscarAlunoPorID")
    public ResponseEntity consultar(@RequestParam (name = "codigo") Integer codigo){
        return repository.findById(codigo)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    //Insere novo
    @PostMapping(value = "salvarAluno")
    public AlunoModel salvar(@RequestBody AlunoModel aluno){
        return repository.save(aluno);
    }

    //Trocar senha
    @PostMapping(value = "trocarSenha")
    public AlunoModel atualizar(@RequestParam Integer codigo,
                                @RequestParam String senha){
        AlunoModel aluno = repository.findById(codigo).get();
        aluno.setSenha(senha);
        return repository.save(aluno);
    }

    //Edita
    @PutMapping(path = "/api/aluno")
    public AlunoModel alterar(@RequestBody AlunoModel aluno){
        return repository.save(aluno);
    }

    //Exclui
    @DeleteMapping(value = "deletarAluno")
    @ResponseBody
    public void excluir(@RequestParam Integer codigo){
        repository.deleteById(codigo);
    }


    @GetMapping(value = "loginAluno")
    @ResponseBody
    public AlunoModel login(@RequestParam (name = "usuario") String usuario,
                            @RequestParam (name = "senha") String senha){
        return repository.fazerLogin(usuario, senha);
    }

    @GetMapping(value = "buscarAlunoPorSala")
    public List<AlunoModel> buscarPorSala(@RequestParam (name = "turma") String turma){
        return repository.bucsarPorSala(turma);
    }

    @GetMapping(value = "buscarUSuario")
    public AlunoModel buscarUsuario(@RequestParam (name = "usuario") String usuario){
        return  repository.buscarUsuarios(usuario);
    }
}

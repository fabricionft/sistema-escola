package sistema.sistema.escola.api.controller.nota;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.nota.Notas1Model;
import sistema.sistema.escola.api.repository.nota.Notas1Repository;

import java.util.List;

@RestController
public class Notas1Controller {

    @Autowired
    private Notas1Repository repository;

    //Lista tudo
    @GetMapping(path = "/api/notas1/listar")
    public List<Notas1Model> listar(){
        return repository.findAll();
    }

    //Busca ID
    @GetMapping(value = "buscarNotas1PorID")
    public Notas1Model consultar(@RequestParam (name = "codigo") Long codigo){
        return repository.buscarPorID(codigo);
    }

    //Insere novo
    @PostMapping(value = "salvarNotas1")
    public Notas1Model salvar(@RequestBody Notas1Model notas){
        return repository.save(notas);
    }

    //Edita
    @PutMapping(path = "/api/notas1")
    public Notas1Model alterar(@RequestBody Notas1Model notas){
        return repository.save(notas);
    }

    //Exclui
    @DeleteMapping(value = "deletarNotas1")
    @ResponseBody
    public void excluir(@RequestParam Long codigo){
        repository.deleteById(codigo);
    }
}

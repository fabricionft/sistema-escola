package sistema.sistema.escola.api.controller.nota;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.nota.Notas1Model;
import sistema.sistema.escola.api.model.nota.Notas3Model;
import sistema.sistema.escola.api.repository.nota.Notas3Repository;

import java.util.List;

@RestController
public class Notas3Controller {

    @Autowired
    private Notas3Repository repository;

    //Lista tudo
    @GetMapping(path = "/api/notas3/listar")
    public List<Notas3Model> listar(){
        return repository.findAll();
    }

    //Busca ID
    @GetMapping(value = "buscarNotas3PorID")
    public Notas3Model consultar(@RequestParam (name = "codigo") Long codigo){
        return repository.buscarPorID(codigo);
    }

    //Insere novo
    @PostMapping(value = "salvarNotas3")
    public Notas3Model salvar(@RequestBody Notas3Model notas){
        return repository.save(notas);
    }

    //Edita
    @PutMapping(path = "/api/notas3")
    public Notas3Model alterar(@RequestBody Notas3Model notas){
        return repository.save(notas);
    }

    //Exclui
    @DeleteMapping(value = "deletarNotas3")
    @ResponseBody
    public void excluir(@RequestParam Long codigo){
        repository.deleteById(codigo);
    }
}


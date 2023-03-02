package sistema.sistema.escola.api.controller.nota;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.nota.Notas1Model;
import sistema.sistema.escola.api.model.nota.Notas4Model;
import sistema.sistema.escola.api.repository.nota.Notas4Repository;

import java.util.List;

@RestController
public class Notas4Controller {

    @Autowired
    private Notas4Repository repository;

    //Lista tudo
    @GetMapping(path = "/api/notas4/listar")
    public List<Notas4Model> listar(){
        return repository.findAll();
    }

    //Busca ID
    @GetMapping(value = "buscarNotas4PorID")
    public Notas4Model consultar(@RequestParam (name = "codigo") Long codigo){
        return repository.buscarPorID(codigo);
    }

    //Insere novo
    @PostMapping(value = "salvarNotas4")
    public Notas4Model salvar(@RequestBody Notas4Model notas){
        return repository.save(notas);
    }

    //Edita
    @PutMapping(path = "/api/notas4")
    public Notas4Model alterar(@RequestBody Notas4Model notas){
        return repository.save(notas);
    }

    //Exclui
    @DeleteMapping(value = "deletarNotas4")
    @ResponseBody
    public void excluir(@RequestParam Long codigo){
        repository.deleteById(codigo);
    }
}


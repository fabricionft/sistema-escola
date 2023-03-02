package sistema.sistema.escola.api.controller.nota;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.nota.Notas1Model;
import sistema.sistema.escola.api.model.nota.Notas2Model;
import sistema.sistema.escola.api.repository.nota.Notas2Repository;

import java.util.List;

@RestController
public class Notas2Controller {

    @Autowired
    private Notas2Repository repository;

    //Lista tudo
    @GetMapping(value = "buscarNota2")
    public List<Notas2Model> listar(){
        return repository.findAll();
    }

    //Busca ID
    @GetMapping(value = "buscarNotas2PorID")
    public Notas2Model consultar(@RequestParam (name = "codigo") Long codigo){
        return repository.buscarPorID(codigo);
    }

    //Insere novo
    @PostMapping(value = "salvarNotas2")
    public Notas2Model salvar(@RequestBody Notas2Model notas){
        return repository.save(notas);
    }

    //Edita
    @PutMapping(path = "/api/notas2")
    public Notas2Model alterar(@RequestBody Notas2Model notas){
        return repository.save(notas);
    }

    //Exclui
    @DeleteMapping(value = "deletarNotas2")
    @ResponseBody
    public void excluir(@RequestParam Long codigo){
        repository.deleteById(codigo);
    }
}

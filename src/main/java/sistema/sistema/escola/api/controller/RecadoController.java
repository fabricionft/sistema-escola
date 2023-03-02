package sistema.sistema.escola.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.RecadoModel;
import sistema.sistema.escola.api.repository.RecadoRepository;

import java.util.List;


@RestController
public class RecadoController {

    @Autowired
    private RecadoRepository repository;

    //Lista tudo
    @GetMapping(path = "/api/recado/listar")
    public List<RecadoModel> listar(){
        return repository.findAll();
    }

    //Busca ID
    @GetMapping(value = "buscarRecadoPorID")
    public ResponseEntity consultar(@RequestParam(name = "codigo") Integer codigo){
        return repository.findById(codigo)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    //Insere novo
    @PostMapping(value = "salvar")
    public RecadoModel salvar(@RequestBody RecadoModel recado){
        return repository.save(recado);
    }

    //Edita
    @PutMapping(path = "/api/recado")
    public RecadoModel alterar(@RequestBody RecadoModel recado){
        return repository.save(recado);
    }

    //Exclui
    @DeleteMapping(value = "deletar")
    @ResponseBody
    public void excluir(@RequestParam Integer codigo){
        repository.deleteById(codigo);
    }
}

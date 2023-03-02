package sistema.sistema.escola.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.ProvaModel;
import sistema.sistema.escola.api.repository.ProvaRepository;

import java.util.List;

@RestController
public class ProvaController {
    @Autowired
    private ProvaRepository repository;

    //Lista tudo
    @GetMapping(path = "/api/prova/listar")
    public List<ProvaModel> listar(){
        return repository.findAll();
    }

    //Busca ID
    @GetMapping(value = "buscarProvaPorID")
    public ResponseEntity consultar(@RequestParam (name = "codigo") Integer codigo){
        return repository.findById(codigo)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(value = "buscarProvaPorSala")
    @ResponseBody
    public List<ProvaModel> buscarPorSala(@RequestParam(name = "turma") String turma){
        return repository.buscarPorSala(turma);
    }

    //Insere novo
    @PostMapping(value = "salvarProva")
    public ProvaModel salvar(@RequestBody ProvaModel prova){
        return repository.save(prova);
    }

    //Edita
    @PutMapping(path = "/api/prova")
    public ProvaModel alterar(@RequestBody ProvaModel prova){
        return repository.save(prova);
    }

    //Exclui
    @DeleteMapping(value = "deletarProva")
    @ResponseBody
    public void excluir(@RequestParam Integer codigo){
        repository.deleteById(codigo);
    }
}


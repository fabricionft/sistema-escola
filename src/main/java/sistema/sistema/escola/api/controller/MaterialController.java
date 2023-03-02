package sistema.sistema.escola.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.MaterialModel;
import sistema.sistema.escola.api.repository.MaterialRepository;

import java.util.List;

@RestController
public class MaterialController {
    @Autowired
    private MaterialRepository repository;

    //Lista tudo
    @GetMapping(path = "/api/material/listar")
    public List<MaterialModel> listar(){
        return repository.findAll();
    }

    //Busca ID
    @GetMapping(value = "buscarMaterialPorID")
    public ResponseEntity consultar(@RequestParam (name = "codigo") Integer codigo){
        return repository.findById(codigo)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping(value = "buscarMaterialPorSala")
    @ResponseBody
    public List<MaterialModel> buscarPorSala(@RequestParam (name = "turma") String turma){
        return repository.buscarMaterialPorSala(turma);
    }

    //Insere novo
    @PostMapping(value = "salvarMaterial")
    public MaterialModel salvar(@RequestBody MaterialModel material){
        return repository.save(material);
    }

    //Edita
    @PutMapping(path = "/api/material")
    public MaterialModel alterar(@RequestBody MaterialModel material){
        return repository.save(material);
    }

    //Exclui
    @DeleteMapping(value = "deletarMaterial")
    @ResponseBody
    public void excluir(@RequestParam Integer codigo){
        repository.deleteById(codigo);
    }
}

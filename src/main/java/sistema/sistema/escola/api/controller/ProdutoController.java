package sistema.sistema.escola.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sistema.sistema.escola.api.model.ProdutoModel;
import sistema.sistema.escola.api.repository.ProdutoRepository;

import java.util.List;

@RestController
public class ProdutoController {
    @Autowired
    private ProdutoRepository repository;

    //Lista tudo
    @GetMapping(path = "/api/produto/listar")
    public List<ProdutoModel> listar(){
        return repository.findAll();
    }

    //Busca ID
    @GetMapping(value = "buscarProdutoPorID")
    public ResponseEntity consultar(@RequestParam(name = "codigo") Long codigo){
        return repository.findById(codigo)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    //Insere novo
    @PostMapping(value = "salvarProduto")
    public ProdutoModel salvar(@RequestBody ProdutoModel produto){
        return repository.save(produto);
    }

    //Edita
    @PutMapping(path = "/api/produto")
    public ProdutoModel alterar(@RequestBody ProdutoModel produto){
        return repository.save(produto);
    }

    //Exclui
    @DeleteMapping(value = "deletarProduto")
    @ResponseBody
    public void excluir(@RequestParam Long codigo){
        repository.deleteById(codigo);
    }
}

package sistema.sistema.escola.api.model;

import javax.persistence.*;

@Entity(name = "produtos")
public class ProdutoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long codigo;

    @Column(nullable = false, length = 20)
    public String local;

    @Column(nullable = false, length = 10)
    public Double valor;

    @Column(nullable = false, length = 200)
    public String descricao;
}

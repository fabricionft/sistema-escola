package sistema.sistema.escola.api.model;

import javax.persistence.*;

@Entity(name = "materiais")
public class MaterialModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer codigo;

    @Column(nullable = false, length = 3)
    public String turma ;

    @Column(nullable = false, length = 30)
    public String disciplina;

    @Column(nullable = false, length = 30)
    public String professor;

    @Column(nullable = false, length = 11)
    public String data;

    @Column(nullable = false, length = 250)
    public String descricao;

    @Column(nullable = false, length = 300)
    public String link;

    @Column(nullable = false, length = 25)
    public String tipo;
}

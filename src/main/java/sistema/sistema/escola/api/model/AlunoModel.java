package sistema.sistema.escola.api.model;

import javax.persistence.*;

@Entity(name = "alunos")
public class AlunoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer codigo;

    @Column(nullable = false, length = 80)
    public String nome;

    @Column(nullable = false, length = 10)
    public String dataNascimento;

    @Column(nullable = false, length = 80)
    public String mae;

    @Column(nullable = false, length = 40)
    public String cidade;

    @Column(nullable = false, length = 10)
    public String sexo;

    @Column(nullable = false, length = 80)
    public String escola;

    @Column(nullable = false, length = 4)
    public String turma;

    @Column(nullable = false, length = 25)
    public Integer ra;

    @Column(nullable = false, length = 25)
    public Integer matricula;

    @Column(nullable = false, length = 60)
    public String usuario;

    @Column(nullable = false, length = 20)
    public String senha;

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}

package sistema.sistema.escola.api.model.nota;

import javax.persistence.*;

@Entity(name = "notas4")
public class Notas4Model {

    @Id
    public Long codigo;

    @Column(nullable = false, length = 50)
    public String turma;

    @Column(nullable = false, length = 50)
    public String aluno;

    @Column(nullable = false, length = 4)
    public Integer bimestre;

    @Column(nullable = false, length = 4)
    public Double portugues;

    @Column(nullable = false, length = 4)
    public Double matematica;

    @Column(nullable = false, length = 4)
    public Double historia;

    @Column(nullable = false, length = 4)
    public Double geografia;

    @Column(nullable = false, length = 4)
    public Double biologia;

    @Column(nullable = false, length = 4)
    public Double fisica;

    @Column(nullable = false, length = 4)
    public Double quimica;

    @Column(nullable = false, length = 4)
    public Double edfisica;

    @Column(nullable = false, length = 4)
    public Double ingles;

    @Column(nullable = false, length = 4)
    public Double sociologia;

    @Column(nullable = false, length = 4)
    public Double filosofia;

    @Column(nullable = false, length = 4)
    public Integer faltasmatematica;

    @Column(nullable = false, length = 4)
    public Integer faltasportugues;

    @Column(nullable = false, length = 4)
    public Integer faltashistoria;

    @Column(nullable = false, length = 4)
    public Integer faltasgeografia;

    @Column(nullable = false, length = 4)
    public Integer faltasfilosofia;

    @Column(nullable = false, length = 4)
    public Integer faltassociologia;

    @Column(nullable = false, length = 4)
    public Integer faltasfisica;

    @Column(nullable = false, length = 4)
    public Integer faltasedfisica;

    @Column(nullable = false, length = 4)
    public Integer faltasingles;

    @Column(nullable = false, length = 4)
    public Integer faltasbiologia;

    @Column(nullable = false, length = 4)
    public Integer faltasquimica;
}


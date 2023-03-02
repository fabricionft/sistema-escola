package sistema.sistema.escola.api.model;

import javax.persistence.*;

@Entity(name = "provas")
public class ProvaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer codigo;

    @Column(nullable = false, length = 12)
    public String data;

    @Column(nullable = false, length = 3)
    public String turma;

    @Column(nullable = false, length = 30)
    public String disciplina;

    @Column(nullable = false, length = 200)
    public String materia;

    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getTurma() {
        return turma;
    }

    public void setTurma(String turma) {
        this.turma = turma;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }
}

package sistema.sistema.escola.api.model;

import javax.persistence.*;

@Entity(name = "recado")
public class RecadoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer codigo;

    @Column(nullable = false, length = 30)
    public String titulo;

    @Column(nullable = false, length = 200)
    public String recado;

    @Column(nullable = false, length = 11)
    public String data;

    @Column(nullable = false, length = 6)
    public String horario;


    //GETS SETS
    public Integer getCodigo() {
        return codigo;
    }

    public void setCodigo(Integer codigo) {
        this.codigo = codigo;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getRecado() {
        return recado;
    }

    public void setRecado(String recado) {
        this.recado = recado;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }
}

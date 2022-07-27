package br.com.ccb.core.entities;

import br.com.ccb.core.commons.enums.AnomalyPriority;
import br.com.ccb.core.commons.enums.AnomalyType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Anomaly extends AbstractEntity {

    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name = "id_church")
    private Church church;

    @Column
    private String description;

    @Column
    @Enumerated(EnumType.STRING)
    private AnomalyType type;

    @Column
    @Enumerated(EnumType.STRING)
    private AnomalyPriority priority;

    @ColumnDefault("false")
    private boolean labor;

    @ColumnDefault("false")
    private boolean material;
}

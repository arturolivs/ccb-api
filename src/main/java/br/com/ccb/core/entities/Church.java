package br.com.ccb.core.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;


@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Church extends AbstractEntity {

    private String locale;

    @Column(name = "address_code")
    private String addressCode;

    @OneToMany(mappedBy = "church", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Anomaly> anomalies;
}

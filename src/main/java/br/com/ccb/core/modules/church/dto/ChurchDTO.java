package br.com.ccb.core.modules.church.dto;

import br.com.ccb.core.entities.Anomaly;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChurchDTO implements Serializable {

    private static final long serialVersionUID = -3788501987274403060L;

    private UUID id;

    private String locale;

    private String addressCode;

    private List<Anomaly> anomalies;
}
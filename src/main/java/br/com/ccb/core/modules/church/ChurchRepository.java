package br.com.ccb.core.modules.church;

import br.com.ccb.core.entities.Church;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface ChurchRepository extends JpaRepository<Church, UUID> {

}

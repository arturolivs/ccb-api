package br.com.ccb.core.modules.church;

import br.com.ccb.core.entities.Church;
import br.com.ccb.core.modules.church.dto.ChurchDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface ChurchService {
    ChurchDTO create(ChurchDTO churchDTO);
    ChurchDTO update(ChurchDTO churchDTO, UUID id);
    ChurchDTO get(UUID id);
    void delete(UUID id);
    Church findOne(UUID id);
    Page<ChurchDTO> list(Pageable pageable);
}

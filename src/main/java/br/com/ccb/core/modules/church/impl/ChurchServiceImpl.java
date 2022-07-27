package br.com.ccb.core.modules.church.impl;


import br.com.ccb.core.commons.exceptions.BusinessException;
import br.com.ccb.core.commons.exceptions.ResourceAlreadyInUseException;
import br.com.ccb.core.commons.exceptions.ResourceNotFoundException;
import br.com.ccb.core.entities.Church;
import br.com.ccb.core.modules.church.ChurchRepository;
import br.com.ccb.core.modules.church.ChurchService;
import br.com.ccb.core.modules.church.dto.ChurchDTO;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.UUID;

@Service
@Slf4j
public class ChurchServiceImpl implements ChurchService {
    @Autowired
    private ModelMapper mapper;

    @Autowired
    private ChurchRepository churchRepository;

    @Override
    public ChurchDTO create(ChurchDTO churchDTO) {
        var referenceDate = LocalDate.now();


        var existingChurch = churchRepository.findById(churchDTO.getId());
        if (existingChurch.isPresent()) {
            log.error(">>> Church is already in use. Returning error to client");
            throw new ResourceAlreadyInUseException("Church is already in use");
        }

        var church = mapper.map(churchDTO, Church.class);
        church.setCreatedAt(new Date());
        church.setUpdatedAt(new Date());

        churchRepository.save(church);
        churchDTO.setId(church.getId());
        log.info(">>> Entity persisted!");
        return churchDTO;
    }

    public ChurchDTO update(ChurchDTO churchDTO, UUID id){
        try {
            log.info(">>> Starting update entity");

            Church storageChurch = this.findOne(id);
            var church = mapper.map(churchDTO, Church.class);
            church.setId(id);
            church.setUpdatedAt(new Date());
            church.setCreatedAt(storageChurch.getCreatedAt());

            churchRepository.save(church);

            log.info(">>> Entity persisted!");
            churchDTO.setId(id);
            return churchDTO;
        } catch (DataIntegrityViolationException e) {
            log.error(">>> An exception occurred! {}", e.getMessage());
            throw new BusinessException("A business exception ocurred. Please verify the values of request body.");
        }
    }

    public ChurchDTO get(UUID churchID){
        var church = this.findOne(churchID);
        log.info(">>> Building church DTO from address entity");
        var churchDTO = mapper.map(church, ChurchDTO.class);
        log.info(">>> Done");

        return churchDTO;
    }
    public void delete(UUID id) {
        log.info(">>> Get church to delete.");
        var church = this.findOne(id);
        churchRepository.delete(church);
    }

    @Override
    public Church findOne(UUID id){
        log.info(">>> Starting find church with ID {}", id);

        return churchRepository.findById(id).orElseThrow(() -> {
            log.error(">>> Church not found with ID {}", id);
            throw new ResourceNotFoundException("No church found with ID " + id.toString());
        });
    }


    public Page<ChurchDTO> list(Pageable pageable) {
        log.info(">>> Searching categories list from database");

        var pageOfChurchs = churchRepository.findAll(pageable);
        var pageOfChurchsDTO = pageOfChurchs.map(
                church -> mapper.map(church, ChurchDTO.class)
        );

        log.info(">>> Done");
        return pageOfChurchsDTO;
    }
}

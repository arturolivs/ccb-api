package br.com.ccb.core.modules.church;

import br.com.ccb.core.modules.church.dto.ChurchDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import java.util.UUID;

@RestController
@RequestMapping("/church")
@Validated
@Slf4j
@CrossOrigin
public class ChurchController {

    @Autowired
    private ChurchService churchService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public void create(@Valid @RequestBody ChurchDTO churchDTO){
        var church = churchService.create(churchDTO);
        log.info(">>> Church created");
    }

    @PutMapping("/{id}")
    public ResponseEntity<ChurchDTO> update(@Valid @RequestBody ChurchDTO churchDTO, @PathVariable("id") UUID id){
        log.info(">>> [PUT] A new request to get church with ID {}", id);
        var churchDTOUpdated = churchService.update(churchDTO, id);
        log.info(">>> Response: {}", churchDTOUpdated);

        return ResponseEntity.ok(churchDTOUpdated);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") UUID id){
        log.info(">>> [DELETE] A new request to delete church with ID {}", id);
        churchService.delete(id);
        log.info(">>> Customer deleted! No response.");
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChurchDTO> get(@PathVariable("id") UUID customerID){
        log.info(">>> [GET] A new request to get church with ID {}", customerID);
        var customerDTO = churchService.get(customerID);
        log.info(">>> Response: {}", customerDTO);
        return ResponseEntity.ok(customerDTO);
    }

    @GetMapping
    public ResponseEntity<Page<ChurchDTO>> list(
            @Valid @RequestParam(value = "size", defaultValue = "10") @Min(1) Integer size,
            @Valid @RequestParam(value = "page", defaultValue = "0") @Min(0) Integer page){
        var pageable = PageRequest.of(page, size);

        log.info(">>> [GET] A new request to get list of churchs in page {} with size {}", page, size);
        var pageOfChurchDTO = churchService.list(pageable);
        log.info(">>> Response: {}", pageOfChurchDTO);

        return ResponseEntity.ok(pageOfChurchDTO);
    }

}

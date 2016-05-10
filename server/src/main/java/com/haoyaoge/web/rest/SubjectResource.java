package com.haoyaoge.web.rest;

import com.codahale.metrics.annotation.Timed;
import com.haoyaoge.domain.Subject;
import com.haoyaoge.repository.SubjectRepository;
import com.haoyaoge.web.rest.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing Subject.
 */
@RestController
@RequestMapping("/api")
public class SubjectResource {

    private final Logger log = LoggerFactory.getLogger(SubjectResource.class);
        
    @Inject
    private SubjectRepository subjectRepository;
    
    /**
     * POST  /subjects : Create a new subject.
     *
     * @param subject the subject to create
     * @return the ResponseEntity with status 201 (Created) and with body the new subject, or with status 400 (Bad Request) if the subject has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/subjects",
        method = RequestMethod.POST,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Subject> createSubject(@Valid @RequestBody Subject subject) throws URISyntaxException {
        log.debug("REST request to save Subject : {}", subject);
        if (subject.getId() != null) {
            return ResponseEntity.badRequest().headers(HeaderUtil.createFailureAlert("subject", "idexists", "A new subject cannot already have an ID")).body(null);
        }
        Subject result = subjectRepository.save(subject);
        return ResponseEntity.created(new URI("/api/subjects/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert("subject", result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /subjects : Updates an existing subject.
     *
     * @param subject the subject to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated subject,
     * or with status 400 (Bad Request) if the subject is not valid,
     * or with status 500 (Internal Server Error) if the subject couldnt be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/subjects",
        method = RequestMethod.PUT,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Subject> updateSubject(@Valid @RequestBody Subject subject) throws URISyntaxException {
        log.debug("REST request to update Subject : {}", subject);
        if (subject.getId() == null) {
            return createSubject(subject);
        }
        Subject result = subjectRepository.save(subject);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert("subject", subject.getId().toString()))
            .body(result);
    }

    /**
     * GET  /subjects : get all the subjects.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of subjects in body
     */
    @RequestMapping(value = "/subjects",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public List<Subject> getAllSubjects() {
        log.debug("REST request to get all Subjects");
        List<Subject> subjects = subjectRepository.findAll();
        return subjects;
    }

    /**
     * GET  /subjects/:id : get the "id" subject.
     *
     * @param id the id of the subject to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the subject, or with status 404 (Not Found)
     */
    @RequestMapping(value = "/subjects/{id}",
        method = RequestMethod.GET,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Subject> getSubject(@PathVariable String id) {
        log.debug("REST request to get Subject : {}", id);
        Subject subject = subjectRepository.findOne(id);
        return Optional.ofNullable(subject)
            .map(result -> new ResponseEntity<>(
                result,
                HttpStatus.OK))
            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * DELETE  /subjects/:id : delete the "id" subject.
     *
     * @param id the id of the subject to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @RequestMapping(value = "/subjects/{id}",
        method = RequestMethod.DELETE,
        produces = MediaType.APPLICATION_JSON_VALUE)
    @Timed
    public ResponseEntity<Void> deleteSubject(@PathVariable String id) {
        log.debug("REST request to delete Subject : {}", id);
        subjectRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert("subject", id.toString())).build();
    }

}

package com.haoyaoge.web.rest;

import com.haoyaoge.HaoyaogeApp;
import com.haoyaoge.domain.Subject;
import com.haoyaoge.repository.SubjectRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.hamcrest.Matchers.hasItem;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


/**
 * Test class for the SubjectResource REST controller.
 *
 * @see SubjectResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = HaoyaogeApp.class)
@WebAppConfiguration
@IntegrationTest
public class SubjectResourceIntTest {

    private static final String DEFAULT_SUBJECT = "AAAAA";
    private static final String UPDATED_SUBJECT = "BBBBB";
    private static final String DEFAULT_SECOND_NAME = "AAAAA";
    private static final String UPDATED_SECOND_NAME = "BBBBB";
    private static final String DEFAULT_DESC = "AAAAA";
    private static final String UPDATED_DESC = "BBBBB";
    private static final String DEFAULT_HOME_BANNER = "AAAAA";
    private static final String UPDATED_HOME_BANNER = "BBBBB";
    private static final String DEFAULT_TYPE = "AAAAA";
    private static final String UPDATED_TYPE = "BBBBB";

    private static final Integer DEFAULT_POSITION = 1;
    private static final Integer UPDATED_POSITION = 2;
    private static final String DEFAULT_SHARE_IMAGE = "AAAAA";
    private static final String UPDATED_SHARE_IMAGE = "BBBBB";

    @Inject
    private SubjectRepository subjectRepository;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restSubjectMockMvc;

    private Subject subject;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        SubjectResource subjectResource = new SubjectResource();
        ReflectionTestUtils.setField(subjectResource, "subjectRepository", subjectRepository);
        this.restSubjectMockMvc = MockMvcBuilders.standaloneSetup(subjectResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    @Before
    public void initTest() {
        subjectRepository.deleteAll();
        subject = new Subject();
        subject.setSubject(DEFAULT_SUBJECT);
        subject.setSecond_name(DEFAULT_SECOND_NAME);
        subject.setDesc(DEFAULT_DESC);
        subject.setHome_banner(DEFAULT_HOME_BANNER);
        subject.setType(DEFAULT_TYPE);
        subject.setPosition(DEFAULT_POSITION);
        subject.setShare_image(DEFAULT_SHARE_IMAGE);
    }

    @Test
    public void createSubject() throws Exception {
        int databaseSizeBeforeCreate = subjectRepository.findAll().size();

        // Create the Subject

        restSubjectMockMvc.perform(post("/api/subjects")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(subject)))
                .andExpect(status().isCreated());

        // Validate the Subject in the database
        List<Subject> subjects = subjectRepository.findAll();
        assertThat(subjects).hasSize(databaseSizeBeforeCreate + 1);
        Subject testSubject = subjects.get(subjects.size() - 1);
        assertThat(testSubject.getSubject()).isEqualTo(DEFAULT_SUBJECT);
        assertThat(testSubject.getSecond_name()).isEqualTo(DEFAULT_SECOND_NAME);
        assertThat(testSubject.getDesc()).isEqualTo(DEFAULT_DESC);
        assertThat(testSubject.getHome_banner()).isEqualTo(DEFAULT_HOME_BANNER);
        assertThat(testSubject.getType()).isEqualTo(DEFAULT_TYPE);
        assertThat(testSubject.getPosition()).isEqualTo(DEFAULT_POSITION);
        assertThat(testSubject.getShare_image()).isEqualTo(DEFAULT_SHARE_IMAGE);
    }

    @Test
    public void checkSubjectIsRequired() throws Exception {
        int databaseSizeBeforeTest = subjectRepository.findAll().size();
        // set the field null
        subject.setSubject(null);

        // Create the Subject, which fails.

        restSubjectMockMvc.perform(post("/api/subjects")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(subject)))
                .andExpect(status().isBadRequest());

        List<Subject> subjects = subjectRepository.findAll();
        assertThat(subjects).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkHome_bannerIsRequired() throws Exception {
        int databaseSizeBeforeTest = subjectRepository.findAll().size();
        // set the field null
        subject.setHome_banner(null);

        // Create the Subject, which fails.

        restSubjectMockMvc.perform(post("/api/subjects")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(subject)))
                .andExpect(status().isBadRequest());

        List<Subject> subjects = subjectRepository.findAll();
        assertThat(subjects).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkTypeIsRequired() throws Exception {
        int databaseSizeBeforeTest = subjectRepository.findAll().size();
        // set the field null
        subject.setType(null);

        // Create the Subject, which fails.

        restSubjectMockMvc.perform(post("/api/subjects")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(subject)))
                .andExpect(status().isBadRequest());

        List<Subject> subjects = subjectRepository.findAll();
        assertThat(subjects).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllSubjects() throws Exception {
        // Initialize the database
        subjectRepository.save(subject);

        // Get all the subjects
        restSubjectMockMvc.perform(get("/api/subjects?sort=id,desc"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.[*].id").value(hasItem(subject.getId())))
                .andExpect(jsonPath("$.[*].subject").value(hasItem(DEFAULT_SUBJECT.toString())))
                .andExpect(jsonPath("$.[*].second_name").value(hasItem(DEFAULT_SECOND_NAME.toString())))
                .andExpect(jsonPath("$.[*].desc").value(hasItem(DEFAULT_DESC.toString())))
                .andExpect(jsonPath("$.[*].home_banner").value(hasItem(DEFAULT_HOME_BANNER.toString())))
                .andExpect(jsonPath("$.[*].type").value(hasItem(DEFAULT_TYPE.toString())))
                .andExpect(jsonPath("$.[*].position").value(hasItem(DEFAULT_POSITION)))
                .andExpect(jsonPath("$.[*].share_image").value(hasItem(DEFAULT_SHARE_IMAGE.toString())));
    }

    @Test
    public void getSubject() throws Exception {
        // Initialize the database
        subjectRepository.save(subject);

        // Get the subject
        restSubjectMockMvc.perform(get("/api/subjects/{id}", subject.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(subject.getId()))
            .andExpect(jsonPath("$.subject").value(DEFAULT_SUBJECT.toString()))
            .andExpect(jsonPath("$.second_name").value(DEFAULT_SECOND_NAME.toString()))
            .andExpect(jsonPath("$.desc").value(DEFAULT_DESC.toString()))
            .andExpect(jsonPath("$.home_banner").value(DEFAULT_HOME_BANNER.toString()))
            .andExpect(jsonPath("$.type").value(DEFAULT_TYPE.toString()))
            .andExpect(jsonPath("$.position").value(DEFAULT_POSITION))
            .andExpect(jsonPath("$.share_image").value(DEFAULT_SHARE_IMAGE.toString()));
    }

    @Test
    public void getNonExistingSubject() throws Exception {
        // Get the subject
        restSubjectMockMvc.perform(get("/api/subjects/{id}", Long.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    public void updateSubject() throws Exception {
        // Initialize the database
        subjectRepository.save(subject);
        int databaseSizeBeforeUpdate = subjectRepository.findAll().size();

        // Update the subject
        Subject updatedSubject = new Subject();
        updatedSubject.setId(subject.getId());
        updatedSubject.setSubject(UPDATED_SUBJECT);
        updatedSubject.setSecond_name(UPDATED_SECOND_NAME);
        updatedSubject.setDesc(UPDATED_DESC);
        updatedSubject.setHome_banner(UPDATED_HOME_BANNER);
        updatedSubject.setType(UPDATED_TYPE);
        updatedSubject.setPosition(UPDATED_POSITION);
        updatedSubject.setShare_image(UPDATED_SHARE_IMAGE);

        restSubjectMockMvc.perform(put("/api/subjects")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(updatedSubject)))
                .andExpect(status().isOk());

        // Validate the Subject in the database
        List<Subject> subjects = subjectRepository.findAll();
        assertThat(subjects).hasSize(databaseSizeBeforeUpdate);
        Subject testSubject = subjects.get(subjects.size() - 1);
        assertThat(testSubject.getSubject()).isEqualTo(UPDATED_SUBJECT);
        assertThat(testSubject.getSecond_name()).isEqualTo(UPDATED_SECOND_NAME);
        assertThat(testSubject.getDesc()).isEqualTo(UPDATED_DESC);
        assertThat(testSubject.getHome_banner()).isEqualTo(UPDATED_HOME_BANNER);
        assertThat(testSubject.getType()).isEqualTo(UPDATED_TYPE);
        assertThat(testSubject.getPosition()).isEqualTo(UPDATED_POSITION);
        assertThat(testSubject.getShare_image()).isEqualTo(UPDATED_SHARE_IMAGE);
    }

    @Test
    public void deleteSubject() throws Exception {
        // Initialize the database
        subjectRepository.save(subject);
        int databaseSizeBeforeDelete = subjectRepository.findAll().size();

        // Get the subject
        restSubjectMockMvc.perform(delete("/api/subjects/{id}", subject.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Subject> subjects = subjectRepository.findAll();
        assertThat(subjects).hasSize(databaseSizeBeforeDelete - 1);
    }
}

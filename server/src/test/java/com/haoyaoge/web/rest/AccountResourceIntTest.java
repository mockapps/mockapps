package com.haoyaoge.web.rest;

import com.haoyaoge.HaoyaogeApp;
import com.haoyaoge.domain.Authority;
import com.haoyaoge.domain.User;
import com.haoyaoge.repository.AuthorityRepository;
import com.haoyaoge.repository.UserRepository;
import com.haoyaoge.security.AuthoritiesConstants;
import com.haoyaoge.service.MailService;
import com.haoyaoge.service.UserService;
import com.haoyaoge.web.rest.dto.ManagedUserDTO;
import com.haoyaoge.web.rest.dto.UserDTO;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import javax.inject.Inject;
import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Matchers.anyObject;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Test class for the AccountResource REST controller.
 *
 * @see UserService
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = HaoyaogeApp.class)
@WebAppConfiguration
@IntegrationTest
public class AccountResourceIntTest {

    @Inject
    private UserRepository userRepository;

    @Inject
    private AuthorityRepository authorityRepository;

    @Inject
    private UserService userService;

    @Mock
    private UserService mockUserService;

    @Mock
    private MailService mockMailService;

    private MockMvc restUserMockMvc;

    private MockMvc restMvc;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        doNothing().when(mockMailService).sendActivationEmail((User) anyObject(), anyString());

        AccountResource accountResource = new AccountResource();
        ReflectionTestUtils.setField(accountResource, "userRepository", userRepository);
        ReflectionTestUtils.setField(accountResource, "userService", userService);
        ReflectionTestUtils.setField(accountResource, "mailService", mockMailService);

        AccountResource accountUserMockResource = new AccountResource();
        ReflectionTestUtils.setField(accountUserMockResource, "userRepository", userRepository);
        ReflectionTestUtils.setField(accountUserMockResource, "userService", mockUserService);
        ReflectionTestUtils.setField(accountUserMockResource, "mailService", mockMailService);

        this.restMvc = MockMvcBuilders.standaloneSetup(accountResource).build();
        this.restUserMockMvc = MockMvcBuilders.standaloneSetup(accountUserMockResource).build();
    }

    @Test
    public void testNonAuthenticatedUser() throws Exception {
        restUserMockMvc.perform(get("/api/authenticate")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(""));
    }

    @Test
    public void testAuthenticatedUser() throws Exception {
        restUserMockMvc.perform(get("/api/authenticate")
                .with(request -> {
                    request.setRemoteUser("test");
                    return request;
                })
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string("test"));
    }

    @Test
    public void testGetExistingAccount() throws Exception {
        Set<Authority> authorities = new HashSet<>();
        Authority authority = new Authority();
        authority.setName(AuthoritiesConstants.ADMIN);
        authorities.add(authority);

        User user = new User();
        user.setLogin("test");
        user.setNickName("john");
        user.setIdCardName("doe");
        user.setIdCardNo("id");
        user.setEmail("john.doe@jhipter.com");
        user.setType("sms");
        user.setAuthorities(authorities);
        when(mockUserService.getUserWithAuthorities()).thenReturn(user);

        restUserMockMvc.perform(get("/api/account")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.login").value("test"))
                .andExpect(jsonPath("$.nick_name").value("john"))
                .andExpect(jsonPath("$.id_card_name").value("doe"))
                .andExpect(jsonPath("$.email").value("john.doe@jhipter.com"))
                .andExpect(jsonPath("$.authorities").value(AuthoritiesConstants.ADMIN));
    }

    @Test
    public void testGetUnknownAccount() throws Exception {
        when(mockUserService.getUserWithAuthorities()).thenReturn(null);

        restUserMockMvc.perform(get("/api/account")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isInternalServerError());
    }

    @Test
    public void testRegisterValid() throws Exception {
        ManagedUserDTO validUser = new ManagedUserDTO(
            null,                   // id
            "joe",                  // login
            "password",             // password
            "Joe",                  // nickName
            "Shmoe",                // idCardName
            "id",                // idCardNo
            "joe@example.com",      // e-mail
            true,                   // activated
            "zh",               // langKey
            "sms",               // type
            new HashSet<>(Arrays.asList(AuthoritiesConstants.USER)),
            null,                   // createdDate
            null,                   // lastModifiedBy
            null                    // lastModifiedDate
        );

        restMvc.perform(
            post("/api/register")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(validUser)))
            .andExpect(status().isCreated());

        Optional<User> user = userRepository.findOneByLogin("joe");
        assertThat(user.isPresent()).isTrue();
    }

    @Test
    public void testRegisterInvalidLogin() throws Exception {
        ManagedUserDTO invalidUser = new ManagedUserDTO(
            null,                   // id
            "funky-log!n",          // login <-- invalid
            "password",             // password
            "Funky",                // nickName
            "One",                  // idCardName
            "id",                  // idCardNo
            "funky@example.com",    // e-mail
            true,                   // activated
            "zh",               // langKey
            "sms",               // type
            new HashSet<>(Arrays.asList(AuthoritiesConstants.USER)),
            null,                   // createdDate
            null,                   // lastModifiedBy
            null                    // lastModifiedDate
        );

        restUserMockMvc.perform(
            post("/api/register")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(invalidUser)))
            .andExpect(status().isBadRequest());

        Optional<User> user = userRepository.findOneByEmail("funky@example.com");
        assertThat(user.isPresent()).isFalse();
    }

    @Test
    public void testRegisterInvalidEmail() throws Exception {
        ManagedUserDTO invalidUser = new ManagedUserDTO(
            null,                   // id
            "bob",              // login
            "password",         // password
            "Bob",              // firstName
            "Green",            // lastName
            "Green",            // lastName
            "invalid",          // e-mail <-- invalid
            true,               // activated
            "zh",               // langKey
            "zh",               // langKey
            new HashSet<>(Arrays.asList(AuthoritiesConstants.USER)),
            null,                   // createdDate
            null,                   // lastModifiedBy
            null                    // lastModifiedDate
        );

        restUserMockMvc.perform(
            post("/api/register")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(invalidUser)))
            .andExpect(status().isBadRequest());

        Optional<User> user = userRepository.findOneByLogin("bob");
        assertThat(user.isPresent()).isFalse();
    }

    @Test
    public void testRegisterInvalidPassword() throws Exception {
        ManagedUserDTO invalidUser = new ManagedUserDTO(
            null,                   // id
            "bob",              // login
            "123",              // password with only 3 digits
            "Bob",              // firstName
            "Bob",              // firstName
            "Green",            // lastName
            "bob@example.com",  // e-mail
            true,               // activated
            "zh",               // langKey
            "zh",               // langKey
            new HashSet<>(Arrays.asList(AuthoritiesConstants.USER)),
            null,                   // createdDate
            null,                   // lastModifiedBy
            null                    // lastModifiedDate
        );

        restUserMockMvc.perform(
            post("/api/register")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(invalidUser)))
            .andExpect(status().isBadRequest());

        Optional<User> user = userRepository.findOneByLogin("bob");
        assertThat(user.isPresent()).isFalse();
    }

    @Test
    public void testRegisterDuplicateLogin() throws Exception {
        // Good
        ManagedUserDTO validUser = new ManagedUserDTO(
            null,                   // id
            "alice",                // login
            "password",             // password
            "Alice",                // firstName
            "Something",            // lastName
            "Something",            // lastName
            "alice@example.com",    // e-mail
            true,                   // activated
            "zh",               // langKey
            "zh",               // langKey
            new HashSet<>(Arrays.asList(AuthoritiesConstants.USER)),
            null,                   // createdDate
            null,                   // lastModifiedBy
            null                    // lastModifiedDate
        );

        // Duplicate login, different e-mail
        ManagedUserDTO duplicatedUser = new ManagedUserDTO(validUser.getId(), validUser.getLogin(), validUser.getPassword(), validUser.getNickName(),validUser.getIdCardName(),validUser.getIdCardNo(),
            "alicejr@example.com", true, validUser.getLangKey(), validUser.getType(),validUser.getAuthorities(), validUser.getCreatedDate(), validUser.getLastModifiedBy(), validUser.getLastModifiedDate());

        // Good user
        restMvc.perform(
            post("/api/register")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(validUser)))
            .andExpect(status().isCreated());

        // Duplicate login
        restMvc.perform(
            post("/api/register")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(duplicatedUser)))
            .andExpect(status().is4xxClientError());

        Optional<User> userDup = userRepository.findOneByEmail("alicejr@example.com");
        assertThat(userDup.isPresent()).isFalse();
    }

    @Test
    public void testRegisterDuplicateEmail() throws Exception {
        // Good
        ManagedUserDTO validUser = new ManagedUserDTO(
            null,                   // id
            "john",                 // login
            "password",             // password
            "John",                 // firstName
            "Doe",                  // lastName
            "Doe",                  // lastName
            "john@example.com",     // e-mail
            true,                   // activated
            "zh",               // langKey
            "zh",               // langKey

            new HashSet<>(Arrays.asList(AuthoritiesConstants.USER)),
            null,                   // createdDate
            null,                   // lastModifiedBy
            null                    // lastModifiedDate
        );

        // Duplicate e-mail, different login
        ManagedUserDTO duplicatedUser = new ManagedUserDTO(validUser.getId(), "johnjr", validUser.getPassword(), validUser.getNickName(),validUser.getIdCardName(),validUser.getIdCardNo(),
            validUser.getEmail(), true, validUser.getLangKey(),validUser.getType(), validUser.getAuthorities(), validUser.getCreatedDate(), validUser.getLastModifiedBy(), validUser.getLastModifiedDate());

        // Good user
        restMvc.perform(
            post("/api/register")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(validUser)))
            .andExpect(status().isCreated());

        // Duplicate e-mail
        restMvc.perform(
            post("/api/register")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(duplicatedUser)))
            .andExpect(status().is4xxClientError());

        Optional<User> userDup = userRepository.findOneByLogin("johnjr");
        assertThat(userDup.isPresent()).isFalse();
    }

    @Test
    public void testRegisterAdminIsIgnored() throws Exception {
        ManagedUserDTO validUser = new ManagedUserDTO(
            null,                   // id
            "badguy",               // login
            "password",             // password
            "Bad",                  // firstName
            "Guy",                  // lastName
            "Guy",                  // lastName
            "badguy@example.com",   // e-mail
            true,                   // activated
            "zh",               // langKey
            "zh",               // langKey
            new HashSet<>(Arrays.asList(AuthoritiesConstants.ADMIN)),
            null,                   // createdDate
            null,                   // lastModifiedBy
            null                    // lastModifiedDate
        );

        restMvc.perform(
            post("/api/register")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(validUser)))
            .andExpect(status().isCreated());

        Optional<User> userDup = userRepository.findOneByLogin("badguy");
        assertThat(userDup.isPresent()).isTrue();
        assertThat(userDup.get().getAuthorities()).hasSize(1)
            .containsExactly(authorityRepository.findOne(AuthoritiesConstants.USER));
    }

    @Test
    public void testSaveInvalidLogin() throws Exception {
        UserDTO invalidUser = new UserDTO(
            "funky-log!n",          // login <-- invalid
            "Funky",                // firstName
            "One",                  // lastName
            "One",                  // lastName
            "funky@example.com",    // e-mail
            true,                   // activated
            "zh",               // langKey
            "zh",               // langKey

            new HashSet<>(Arrays.asList(AuthoritiesConstants.USER))
        );

        restUserMockMvc.perform(
            post("/api/account")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(invalidUser)))
            .andExpect(status().isBadRequest());

        Optional<User> user = userRepository.findOneByEmail("funky@example.com");
        assertThat(user.isPresent()).isFalse();
    }
}

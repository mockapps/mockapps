package com.haoyaoge.web.rest;

import com.haoyaoge.HaoyaogeApp;
import com.haoyaoge.domain.*;
import com.haoyaoge.repository.GoodsRepository;

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
 * Test class for the GoodsResource REST controller.
 *
 * @see GoodsResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = HaoyaogeApp.class)
@WebAppConfiguration
@IntegrationTest
public class GoodsResourceIntTest {

    private static final Integer DEFAULT_SUBJECT_ID = 1;
    private static final Integer UPDATED_SUBJECT_ID = 2;

    private static final Integer DEFAULT_CAT_ID = 1;
    private static final Integer UPDATED_CAT_ID = 2;

    private static final Integer DEFAULT_MALL_ID = 1;
    private static final Integer UPDATED_MALL_ID = 2;
    private static final String DEFAULT_GOODS_NAME = "AAAAA";
    private static final String UPDATED_GOODS_NAME = "BBBBB";

    private static final Boolean DEFAULT_IS_APP = false;
    private static final Boolean UPDATED_IS_APP = true;

    private static final Integer DEFAULT_EVENT_TYPE = 1;
    private static final Integer UPDATED_EVENT_TYPE = 2;
    private static final String DEFAULT_GOODS_DESC = "AAAAA";
    private static final String UPDATED_GOODS_DESC = "BBBBB";

    private static final Boolean DEFAULT_IS_ONSALE = false;
    private static final Boolean UPDATED_IS_ONSALE = true;
    private static final String DEFAULT_THUMB_URL = "http://test.com/goods/a761914f974c5ca208f10eb93cf61389cb64c947b5.jpg";
    private static final String UPDATED_THUMB_URL = "http://test.com/goods/a761914f974c5ca208f10eb93cf61389cb64c947b6.jpg";
    private static final String DEFAULT_ALLOWED_REGION = "AAAAA";
    private static final String UPDATED_ALLOWED_REGION = "BBBBB";
    private static final String DEFAULT_COUNTRY = "AAAAA";
    private static final String UPDATED_COUNTRY = "BBBBB";
    private static final String DEFAULT_WAREHOUSE = "AAAAA";
    private static final String UPDATED_WAREHOUSE = "BBBBB";
    private static final String DEFAULT_IMAGE_URL = "http://test.com/goods/a761914f9724cd4256b6da08ebf9d926e71a1f87ae.jpg";
    private static final String UPDATED_IMAGE_URL = "http://test.com/goods/a761914f9724cd4256b6da08ebf9d926e71a1f87af.jpg";

    private static final Boolean DEFAULT_IS_REFUNDABLE = false;
    private static final Boolean UPDATED_IS_REFUNDABLE = true;

    private static final Boolean DEFAULT_IS_PRE_SALE = false;
    private static final Boolean UPDATED_IS_PRE_SALE = true;

    private static final Integer DEFAULT_PRE_SALE_TIME = 1462848822;
    private static final Integer UPDATED_PRE_SALE_TIME = 1462848828;

    private static final Integer DEFAULT_SKIP_GOODS = 1;
    private static final Integer UPDATED_SKIP_GOODS = 2;
    private static final String DEFAULT_SHARE_DESC = "AAAAA";
    private static final String UPDATED_SHARE_DESC = "BBBBB";

    private static final Integer DEFAULT_CAT_ID_1 = 1;
    private static final Integer UPDATED_CAT_ID_1 = 2;

    private static final Integer DEFAULT_CAT_ID_2 = 1;
    private static final Integer UPDATED_CAT_ID_2 = 2;

    private static final Integer DEFAULT_CAT_ID_3 = 1;
    private static final Integer UPDATED_CAT_ID_3 = 2;

    //sku
    private static final Integer DEFAULT_SKU_ID = 1;
    private static final Integer UPDATED_SKU_ID = 2;

    private static final Integer DEFAULT_QUANTITY = 25;
    private static final Integer UPDATED_QUANTITY = 92;

    private static final Integer DEFAULT_LIMIT_QUANTITY = 0;
    private static final Integer UPDATED_LIMIT_QUANTITY = 1;

    private static final Integer DEFAULT_SOLD_QUANTITY = 0;
    private static final Integer UPDATED_SOLD_QUANTITY = 1;

    private static final Integer DEFAULT_INIT_QUANTITY = 0;
    private static final Integer UPDATED_INIT_QUANTITY = 1;

    private static final Integer DEFAULT_SPEC_ID = 1;
    private static final Integer UPDATED_SPED_ID = 2;

    private static final String DEFAULT_SPEC_KEY = "\u54c1\u540d";
    private static final String DEFAULT_SPEC_VALUE = "PinkLady\u73bb\u7483\u6c34\u5177\u7ec4";

    private static final SkuSpec DEFAULT_SKU_SPEC = new SkuSpec(DEFAULT_SPEC_KEY, DEFAULT_SPEC_VALUE);
    private static final SkuSpec UPDATED_SKU_SPEC = new SkuSpec("\u54c1\u540d", "\u609f\u7a7a\u597d\u8fd0\u73bb\u7483\u6c34\u5177\u7ec4");

    //gallery
    private static final Integer DEFAULT_GALLERY_ID = 1;

    private static final String DEFAULT_GALLERY_URL = "AAAAA";

    private static final Integer DEFAULT_GALLERY_WIDTH = 400;

    private static final Integer DEFAULT_GALLERY_HEIGHT = 400;

    private static final Integer DEFAULT_GALLERY_PRIORITY = 32;

    private static final Integer DEFAULT_GALLERY_TYPE = 2;

    //group
    private static final Integer DEFAULT_GROUP_ID = 1;

    private static final Integer DEFAULT_GROUP_PRICE = 300;

    private static final Integer DEFAULT_CUSTOMER_NUMBER = 20;

    private static final Integer DEFAULT_START_TIME = 1462848822;

    private static final Integer DEFAULT_END_TIME = 1462848828;

    private static final Integer DEFAULT_BUY_LIMIT = 10;

    private static final Integer DEFAULT_ORDER_LIMIT = 10;

    private static final Boolean DEFAULT_IS_OPEN = true;

    @Inject
    private GoodsRepository goodsRepository;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restGoodsMockMvc;

    private Goods goods;

    private Sku sku = createSku();

    private Gallery gallery = createGallery();

    private Group group = createGroup();

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        GoodsResource goodsResource = new GoodsResource();
        ReflectionTestUtils.setField(goodsResource, "goodsRepository", goodsRepository);
        this.restGoodsMockMvc = MockMvcBuilders.standaloneSetup(goodsResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    @Before
    public void initTest() {
        goodsRepository.deleteAll();
        goods = new Goods();
        goods.setSubjectId(DEFAULT_SUBJECT_ID);
        goods.setCatId(DEFAULT_CAT_ID);
        goods.setMallId(DEFAULT_MALL_ID);
        goods.setGoodsName(DEFAULT_GOODS_NAME);
        goods.setIsApp(DEFAULT_IS_APP);
        goods.setEventType(DEFAULT_EVENT_TYPE);
        goods.setGoodsDesc(DEFAULT_GOODS_DESC);
        goods.setIsOnsale(DEFAULT_IS_ONSALE);
        goods.setThumbUrl(DEFAULT_THUMB_URL);
        goods.setAllowedRegion(DEFAULT_ALLOWED_REGION);
        goods.setCountry(DEFAULT_COUNTRY);
        goods.setWarehouse(DEFAULT_WAREHOUSE);
        goods.setImageUrl(DEFAULT_IMAGE_URL);
        goods.setIsRefundable(DEFAULT_IS_REFUNDABLE);
        goods.setIsPreSale(DEFAULT_IS_PRE_SALE);
        goods.setPreSaleTime(DEFAULT_PRE_SALE_TIME);
        goods.setSkipGoods(DEFAULT_SKIP_GOODS);
        goods.setShareDesc(DEFAULT_SHARE_DESC);
        goods.setCatId1(DEFAULT_CAT_ID_1);
        goods.setCatId2(DEFAULT_CAT_ID_2);
        goods.setCatId3(DEFAULT_CAT_ID_3);
        goods.addSku(sku);
        goods.addGallery(gallery);
        goods.addGroup(group);
    }

    @Test
    public void createGoods() throws Exception {
        int databaseSizeBeforeCreate = goodsRepository.findAll().size();

        // Create the Goods

        restGoodsMockMvc.perform(post("/api/goods")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(goods)))
                .andExpect(status().isCreated());

        // Validate the Goods in the database
        List<Goods> goods = goodsRepository.findAll();
        assertThat(goods).hasSize(databaseSizeBeforeCreate + 1);
        Goods testGoods = goods.get(goods.size() - 1);
        assertThat(testGoods.getSubjectId()).isEqualTo(DEFAULT_SUBJECT_ID);
        assertThat(testGoods.getCatId()).isEqualTo(DEFAULT_CAT_ID);
        assertThat(testGoods.getMallId()).isEqualTo(DEFAULT_MALL_ID);
        assertThat(testGoods.getGoodsName()).isEqualTo(DEFAULT_GOODS_NAME);
        assertThat(testGoods.getIsApp()).isEqualTo(DEFAULT_IS_APP);
        assertThat(testGoods.getEventType()).isEqualTo(DEFAULT_EVENT_TYPE);
        assertThat(testGoods.getGoodsDesc()).isEqualTo(DEFAULT_GOODS_DESC);
        assertThat(testGoods.getIsOnsale()).isEqualTo(DEFAULT_IS_ONSALE);
        assertThat(testGoods.getThumbUrl()).isEqualTo(DEFAULT_THUMB_URL);
        assertThat(testGoods.getAllowedRegion()).isEqualTo(DEFAULT_ALLOWED_REGION);
        assertThat(testGoods.getCountry()).isEqualTo(DEFAULT_COUNTRY);
        assertThat(testGoods.getWarehouse()).isEqualTo(DEFAULT_WAREHOUSE);
        assertThat(testGoods.getImageUrl()).isEqualTo(DEFAULT_IMAGE_URL);
        assertThat(testGoods.getIsRefundable()).isEqualTo(DEFAULT_IS_REFUNDABLE);
        assertThat(testGoods.getIsRefundable()).isEqualTo(DEFAULT_IS_PRE_SALE);
        assertThat(testGoods.getPreSaleTime()).isEqualTo(DEFAULT_PRE_SALE_TIME);
        assertThat(testGoods.getSkipGoods()).isEqualTo(DEFAULT_SKIP_GOODS);
        assertThat(testGoods.getShareDesc()).isEqualTo(DEFAULT_SHARE_DESC);
        assertThat(testGoods.getCatId1()).isEqualTo(DEFAULT_CAT_ID_1);
        assertThat(testGoods.getCatId2()).isEqualTo(DEFAULT_CAT_ID_2);
        assertThat(testGoods.getCatId3()).isEqualTo(DEFAULT_CAT_ID_3);
    }

    @Test
    public void checkGoodsDescIsRequired() throws Exception {
        int databaseSizeBeforeTest = goodsRepository.findAll().size();
        // set the field null
        goods.setGoodsDesc(null);

        // Create the Goods, which fails.

        restGoodsMockMvc.perform(post("/api/goods")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(goods)))
                .andExpect(status().isBadRequest());

        List<Goods> goods = goodsRepository.findAll();
        assertThat(goods).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void checkImageurlIsRequired() throws Exception {
        int databaseSizeBeforeTest = goodsRepository.findAll().size();
        // set the field null
        goods.setImageUrl(null);

        // Create the Goods, which fails.

        restGoodsMockMvc.perform(post("/api/goods")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(goods)))
                .andExpect(status().isBadRequest());

        List<Goods> goods = goodsRepository.findAll();
        assertThat(goods).hasSize(databaseSizeBeforeTest);
    }

    @Test
    public void getAllGoods() throws Exception {
        // Initialize the database
        goodsRepository.save(goods);

        // Get all the goods
        restGoodsMockMvc.perform(get("/api/goods?sort=id,desc"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.[*].id").value(hasItem(goods.getId())))
                .andExpect(jsonPath("$.[*].subject_id").value(hasItem(DEFAULT_SUBJECT_ID)))
                .andExpect(jsonPath("$.[*].cat_id").value(hasItem(DEFAULT_CAT_ID)))
                .andExpect(jsonPath("$.[*].mall_id").value(hasItem(DEFAULT_MALL_ID)))
                .andExpect(jsonPath("$.[*].goods_name").value(hasItem(DEFAULT_GOODS_NAME)))
                .andExpect(jsonPath("$.[*].is_app").value(hasItem(DEFAULT_IS_APP)))
                .andExpect(jsonPath("$.[*].event_type").value(hasItem(DEFAULT_EVENT_TYPE)))
                .andExpect(jsonPath("$.[*].goods_desc").value(hasItem(DEFAULT_GOODS_DESC)))
                .andExpect(jsonPath("$.[*].is_onsale").value(hasItem(DEFAULT_IS_ONSALE)))
                .andExpect(jsonPath("$.[*].thumb_url").value(hasItem(DEFAULT_THUMB_URL)))
                .andExpect(jsonPath("$.[*].allowed_region").value(hasItem(DEFAULT_ALLOWED_REGION)))
                .andExpect(jsonPath("$.[*].country").value(hasItem(DEFAULT_COUNTRY)))
                .andExpect(jsonPath("$.[*].warehouse").value(hasItem(DEFAULT_WAREHOUSE)))
                .andExpect(jsonPath("$.[*].image_url").value(hasItem(DEFAULT_IMAGE_URL)))
                .andExpect(jsonPath("$.[*].is_refundable").value(hasItem(DEFAULT_IS_REFUNDABLE)))
                .andExpect(jsonPath("$.[*].is_pre_sale").value(hasItem(DEFAULT_IS_PRE_SALE)))
                .andExpect(jsonPath("$.[*].pre_sale_time").value(hasItem(DEFAULT_PRE_SALE_TIME)))
                .andExpect(jsonPath("$.[*].skip_goods").value(hasItem(DEFAULT_SKIP_GOODS)))
                .andExpect(jsonPath("$.[*].share_desc").value(hasItem(DEFAULT_SHARE_DESC)))
                .andExpect(jsonPath("$.[*].cat_id_1").value(hasItem(DEFAULT_CAT_ID_1)))
                .andExpect(jsonPath("$.[*].cat_id_2").value(hasItem(DEFAULT_CAT_ID_2)))
                .andExpect(jsonPath("$.[*].cat_id_3").value(hasItem(DEFAULT_CAT_ID_3)))
                .andExpect(jsonPath("$.[*].sku[0].sku_id").value(hasItem(DEFAULT_SKU_ID)))
                .andExpect(jsonPath("$.[*].sku[0].thumb_url").value(hasItem(DEFAULT_THUMB_URL)))
                .andExpect(jsonPath("$.[*].sku[0].quantity").value(hasItem(DEFAULT_QUANTITY)))
                .andExpect(jsonPath("$.[*].sku[0].limit_quantity").value(hasItem(DEFAULT_LIMIT_QUANTITY)))
                .andExpect(jsonPath("$.[*].sku[0].sold_quantity").value(hasItem(DEFAULT_SOLD_QUANTITY)))
                .andExpect(jsonPath("$.[*].sku[0].init_quantity").value(hasItem(DEFAULT_INIT_QUANTITY)))
                .andExpect(jsonPath("$.[*].sku[0].is_onsale").value(hasItem(DEFAULT_IS_ONSALE)))
                .andExpect(jsonPath("$.[*].sku[0].spec").value(hasItem(DEFAULT_SPEC_ID)))
                .andExpect(jsonPath("$.[*].sku[0].specs[0].spec_key").value(hasItem(DEFAULT_SPEC_KEY)))
                .andExpect(jsonPath("$.[*].sku[0].specs[0].spec_value").value(hasItem(DEFAULT_SPEC_VALUE)))
                .andExpect(jsonPath("$.[*].gallery[0].id").value(hasItem(DEFAULT_GALLERY_ID)))
                .andExpect(jsonPath("$.[*].gallery[0].url").value(hasItem(DEFAULT_GALLERY_URL)))
                .andExpect(jsonPath("$.[*].gallery[0].width").value(hasItem(DEFAULT_GALLERY_WIDTH)))
                .andExpect(jsonPath("$.[*].gallery[0].height").value(hasItem(DEFAULT_GALLERY_HEIGHT)))
                .andExpect(jsonPath("$.[*].gallery[0].priority").value(hasItem(DEFAULT_GALLERY_PRIORITY)))
                .andExpect(jsonPath("$.[*].gallery[0].type").value(hasItem(DEFAULT_GALLERY_TYPE)))
                .andExpect(jsonPath("$.[*].group[0].id").value(hasItem(DEFAULT_GALLERY_ID)))
                .andExpect(jsonPath("$.[*].group[0].price").value(hasItem(DEFAULT_GROUP_PRICE)))
                .andExpect(jsonPath("$.[*].group[0].customer_num").value(hasItem(DEFAULT_CUSTOMER_NUMBER)))
                .andExpect(jsonPath("$.[*].group[0].start_time").value(hasItem(DEFAULT_START_TIME)))
                .andExpect(jsonPath("$.[*].group[0].end_time").value(hasItem(DEFAULT_END_TIME)))
                .andExpect(jsonPath("$.[*].group[0].buy_limit").value(hasItem(DEFAULT_BUY_LIMIT)))
                .andExpect(jsonPath("$.[*].group[0].order_limit").value(hasItem(DEFAULT_ORDER_LIMIT)))
                .andExpect(jsonPath("$.[*].group[0].is_open").value(hasItem(DEFAULT_IS_OPEN)));
    }

    @Test
    public void getGoods() throws Exception {
        // Initialize the database
        goodsRepository.save(goods);

        // Get the goods
        restGoodsMockMvc.perform(get("/api/goods/{id}", goods.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$.id").value(goods.getId()))
            .andExpect(jsonPath("$.subject_id").value(DEFAULT_SUBJECT_ID))
            .andExpect(jsonPath("$.cat_id").value(DEFAULT_CAT_ID))
            .andExpect(jsonPath("$.mall_id").value(DEFAULT_MALL_ID))
            .andExpect(jsonPath("$.goods_name").value(DEFAULT_GOODS_NAME))
            .andExpect(jsonPath("$.is_app").value(DEFAULT_IS_APP))
            .andExpect(jsonPath("$.event_type").value(DEFAULT_EVENT_TYPE))
            .andExpect(jsonPath("$.goods_desc").value(DEFAULT_GOODS_DESC))
            .andExpect(jsonPath("$.is_onsale").value(DEFAULT_IS_ONSALE))
            .andExpect(jsonPath("$.thumb_url").value(DEFAULT_THUMB_URL))
            .andExpect(jsonPath("$.allowed_region").value(DEFAULT_ALLOWED_REGION))
            .andExpect(jsonPath("$.country").value(DEFAULT_COUNTRY))
            .andExpect(jsonPath("$.warehouse").value(DEFAULT_WAREHOUSE))
            .andExpect(jsonPath("$.image_url").value(DEFAULT_IMAGE_URL))
            .andExpect(jsonPath("$.is_refundable").value(DEFAULT_IS_REFUNDABLE))
            .andExpect(jsonPath("$.is_pre_sale").value(DEFAULT_IS_PRE_SALE))
            .andExpect(jsonPath("$.pre_sale_time").value(DEFAULT_PRE_SALE_TIME))
            .andExpect(jsonPath("$.skip_goods").value(DEFAULT_SKIP_GOODS))
            .andExpect(jsonPath("$.share_desc").value(DEFAULT_SHARE_DESC))
            .andExpect(jsonPath("$.cat_id_1").value(DEFAULT_CAT_ID_1))
            .andExpect(jsonPath("$.cat_id_2").value(DEFAULT_CAT_ID_2))
            .andExpect(jsonPath("$.cat_id_3").value(DEFAULT_CAT_ID_3));
    }

    @Test
    public void getNonExistingGoods() throws Exception {
        // Get the goods
        restGoodsMockMvc.perform(get("/api/goods/{id}", Integer.MAX_VALUE))
                .andExpect(status().isNotFound());
    }

    @Test
    public void updateGoods() throws Exception {
        // Initialize the database
        goodsRepository.save(goods);
        int databaseSizeBeforeUpdate = goodsRepository.findAll().size();

        // Update the goods
        Goods updatedGoods = new Goods();
        updatedGoods.setId(goods.getId());
        updatedGoods.setSubjectId(UPDATED_SUBJECT_ID);
        updatedGoods.setCatId(UPDATED_CAT_ID);
        updatedGoods.setMallId(UPDATED_MALL_ID);
        updatedGoods.setGoodsName(UPDATED_GOODS_NAME);
        updatedGoods.setIsApp(UPDATED_IS_APP);
        updatedGoods.setEventType(UPDATED_EVENT_TYPE);
        updatedGoods.setGoodsDesc(UPDATED_GOODS_DESC);
        updatedGoods.setIsOnsale(UPDATED_IS_ONSALE);
        updatedGoods.setThumbUrl(UPDATED_THUMB_URL);
        updatedGoods.setAllowedRegion(UPDATED_ALLOWED_REGION);
        updatedGoods.setCountry(UPDATED_COUNTRY);
        updatedGoods.setWarehouse(UPDATED_WAREHOUSE);
        updatedGoods.setImageUrl(UPDATED_IMAGE_URL);
        updatedGoods.setIsRefundable(UPDATED_IS_REFUNDABLE);
        updatedGoods.setIsPreSale(UPDATED_IS_PRE_SALE);
        updatedGoods.setPreSaleTime(UPDATED_PRE_SALE_TIME);
        updatedGoods.setSkipGoods(UPDATED_SKIP_GOODS);
        updatedGoods.setShareDesc(UPDATED_SHARE_DESC);
        updatedGoods.setCatId1(UPDATED_CAT_ID_1);
        updatedGoods.setCatId2(UPDATED_CAT_ID_2);
        updatedGoods.setCatId3(UPDATED_CAT_ID_3);

        restGoodsMockMvc.perform(put("/api/goods")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(updatedGoods)))
                .andExpect(status().isOk());

        // Validate the Goods in the database
        List<Goods> goods = goodsRepository.findAll();
        assertThat(goods).hasSize(databaseSizeBeforeUpdate);
        Goods testGoods = goods.get(goods.size() - 1);
        assertThat(testGoods.getSubjectId()).isEqualTo(UPDATED_SUBJECT_ID);
        assertThat(testGoods.getCatId()).isEqualTo(UPDATED_CAT_ID);
        assertThat(testGoods.getMallId()).isEqualTo(UPDATED_MALL_ID);
        assertThat(testGoods.getGoodsName()).isEqualTo(UPDATED_GOODS_NAME);
        assertThat(testGoods.getIsApp()).isEqualTo(UPDATED_IS_APP);
        assertThat(testGoods.getEventType()).isEqualTo(UPDATED_EVENT_TYPE);
        assertThat(testGoods.getGoodsDesc()).isEqualTo(UPDATED_GOODS_DESC);
        assertThat(testGoods.getIsOnsale()).isEqualTo(UPDATED_IS_ONSALE);
        assertThat(testGoods.getThumbUrl()).isEqualTo(UPDATED_THUMB_URL);
        assertThat(testGoods.getAllowedRegion()).isEqualTo(UPDATED_ALLOWED_REGION);
        assertThat(testGoods.getCountry()).isEqualTo(UPDATED_COUNTRY);
        assertThat(testGoods.getWarehouse()).isEqualTo(UPDATED_WAREHOUSE);
        assertThat(testGoods.getImageUrl()).isEqualTo(UPDATED_IMAGE_URL);
        assertThat(testGoods.getIsRefundable()).isEqualTo(UPDATED_IS_REFUNDABLE);
        assertThat(testGoods.getIsPreSale()).isEqualTo(UPDATED_IS_PRE_SALE);
        assertThat(testGoods.getPreSaleTime()).isEqualTo(UPDATED_PRE_SALE_TIME);
        assertThat(testGoods.getSkipGoods()).isEqualTo(UPDATED_SKIP_GOODS);
        assertThat(testGoods.getShareDesc()).isEqualTo(UPDATED_SHARE_DESC);
        assertThat(testGoods.getCatId1()).isEqualTo(UPDATED_CAT_ID_1);
        assertThat(testGoods.getCatId2()).isEqualTo(UPDATED_CAT_ID_2);
        assertThat(testGoods.getCatId3()).isEqualTo(UPDATED_CAT_ID_3);
    }

    @Test
    public void deleteGoods() throws Exception {
        // Initialize the database
        goodsRepository.save(goods);
        int databaseSizeBeforeDelete = goodsRepository.findAll().size();

        // Get the goods
        restGoodsMockMvc.perform(delete("/api/goods/{id}", goods.getId())
                .accept(TestUtil.APPLICATION_JSON_UTF8))
                .andExpect(status().isOk());

        // Validate the database is empty
        List<Goods> goods = goodsRepository.findAll();
        assertThat(goods).hasSize(databaseSizeBeforeDelete - 1);
    }

    private static Sku createSku() {
        Sku sku = new Sku();
        sku.setSkuId(DEFAULT_SKU_ID);
        sku.setQuantity(DEFAULT_QUANTITY);
        sku.setInitQuantity(DEFAULT_INIT_QUANTITY);
        sku.setLimitQuantity(DEFAULT_LIMIT_QUANTITY);
        sku.setSoldQuantity(DEFAULT_SOLD_QUANTITY);
        sku.setIsOnsale(DEFAULT_IS_ONSALE);
        sku.setSpecId(DEFAULT_SPEC_ID);
        sku.setThumbUrl(DEFAULT_THUMB_URL);
        sku.addSpec(DEFAULT_SKU_SPEC);
        return sku;
    }

    private static Gallery createGallery() {
        Gallery gallery = new Gallery();
        gallery.setId(DEFAULT_GALLERY_ID);
        gallery.setHeight(DEFAULT_GALLERY_HEIGHT);
        gallery.setWidth(DEFAULT_GALLERY_WIDTH);
        gallery.setPriority(DEFAULT_GALLERY_PRIORITY);
        gallery.setType(DEFAULT_GALLERY_TYPE);
        gallery.setUrl(DEFAULT_GALLERY_URL);
        return gallery;
    }

    private static Group createGroup(){
        Group group = new Group();
        group.setId(DEFAULT_GROUP_ID);
        group.setBuyLimit(DEFAULT_BUY_LIMIT);
        group.setCustomerNum(DEFAULT_CUSTOMER_NUMBER);
        group.setEndTime(DEFAULT_END_TIME);
        group.setStartTime(DEFAULT_START_TIME);
        group.setIsOpen(DEFAULT_IS_OPEN);
        group.setOrderLimit(DEFAULT_ORDER_LIMIT);
        group.setPrice(DEFAULT_GROUP_PRICE);
        return group;
    }
}

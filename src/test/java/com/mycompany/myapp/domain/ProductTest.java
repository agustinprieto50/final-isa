package com.mycompany.myapp.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.web.rest.TestUtil;
import java.math.BigDecimal;
import java.time.LocalDate;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class ProductTest {

    private Product product;

    @BeforeEach
    public void init() {
        product = new Product();
        product.setName("Test Product");
        product.setDescription("Test Description");
        product.setPrice(new BigDecimal("99.99"));
        product.setStock(10);
        product.setDateAdded(LocalDate.of(2023, 6, 1));
        product.setLastUpdated(LocalDate.of(2023, 6, 10));
    }

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Product.class);
        Product product1 = new Product();
        product1.setId(1L);
        Product product2 = new Product();
        product2.setId(product1.getId());
        assertThat(product1).isEqualTo(product2);
        product2.setId(2L);
        assertThat(product1).isNotEqualTo(product2);
        product1.setId(null);
        assertThat(product1).isNotEqualTo(product2);
    }

    @Test
    public void testProductDetails() {
        assertThat(product.getName()).isEqualTo("Test Product");
        assertThat(product.getDescription()).isEqualTo("Test Description");
        assertThat(product.getPrice()).isEqualByComparingTo("99.99");
        assertThat(product.getStock()).isEqualTo(10);
        assertThat(product.getDateAdded()).isEqualTo(LocalDate.of(2023, 6, 1));
        assertThat(product.getLastUpdated()).isEqualTo(LocalDate.of(2023, 6, 10));
    }

    @Test
    public void testProductStock() {
        product.setStock(0);
        assertThat(product.getStock()).isEqualTo(0);

        product.setStock(100);
        assertThat(product.getStock()).isEqualTo(100);
    }

    @Test
    public void testProductPrice() {
        product.setPrice(new BigDecimal("0.00"));
        assertThat(product.getPrice()).isEqualByComparingTo("0.00");

        product.setPrice(new BigDecimal("9999.99"));
        assertThat(product.getPrice()).isEqualByComparingTo("9999.99");
    }
}

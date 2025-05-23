package com.app.restaurant.Item;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "item")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "name")
    private String Name;
    @Column(name = "unit_price")
    private float unitPrice;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "description")
    private String description;
    
}

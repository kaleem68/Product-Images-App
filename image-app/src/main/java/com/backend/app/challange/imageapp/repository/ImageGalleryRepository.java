package com.backend.app.challange.imageapp.repository;

import com.backend.app.challange.imageapp.model.ImageGallery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ImageGalleryRepository extends JpaRepository<ImageGallery, Long> {

}

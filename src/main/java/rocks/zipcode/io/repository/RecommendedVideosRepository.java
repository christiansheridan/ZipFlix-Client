package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.RecommendedVideos;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the RecommendedVideos entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RecommendedVideosRepository extends JpaRepository<RecommendedVideos, Long> {

}

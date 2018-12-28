package rocks.zipcode.io.repository;

import rocks.zipcode.io.domain.ZipFlixUser;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the ZipFlixUser entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ZipFlixUserRepository extends JpaRepository<ZipFlixUser, Long> {

}

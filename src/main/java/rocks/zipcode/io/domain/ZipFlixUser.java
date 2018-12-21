package rocks.zipcode.io.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A ZipFlixUser.
 */
@Entity
@Table(name = "zip_flix_user")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ZipFlixUser implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @OneToMany(mappedBy = "zipFlixUser")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Profile> profiles = new HashSet<>();
    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public ZipFlixUser dateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Set<Profile> getProfiles() {
        return profiles;
    }

    public ZipFlixUser profiles(Set<Profile> profiles) {
        this.profiles = profiles;
        return this;
    }

    public ZipFlixUser addProfiles(Profile profile) {
        this.profiles.add(profile);
        profile.setZipFlixUser(this);
        return this;
    }

    public ZipFlixUser removeProfiles(Profile profile) {
        this.profiles.remove(profile);
        profile.setZipFlixUser(null);
        return this;
    }

    public void setProfiles(Set<Profile> profiles) {
        this.profiles = profiles;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ZipFlixUser zipFlixUser = (ZipFlixUser) o;
        if (zipFlixUser.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), zipFlixUser.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ZipFlixUser{" +
            "id=" + getId() +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            "}";
    }
}

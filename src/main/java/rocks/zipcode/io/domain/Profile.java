package rocks.zipcode.io.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Profile.
 */
@Entity
@Table(name = "profile")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Profile implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "image_url")
    private String imageURL;

    @OneToMany(mappedBy = "profile")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Tag> interests = new HashSet<>();
    @ManyToOne
    @JsonIgnoreProperties("profiles")
    private ZipFlixUser zipFlixUser;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Profile name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public Profile dateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getImageURL() {
        return imageURL;
    }

    public Profile imageURL(String imageURL) {
        this.imageURL = imageURL;
        return this;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public Set<Tag> getInterests() {
        return interests;
    }

    public Profile interests(Set<Tag> tags) {
        this.interests = tags;
        return this;
    }

    public Profile addInterests(Tag tag) {
        this.interests.add(tag);
        tag.setProfile(this);
        return this;
    }

    public Profile removeInterests(Tag tag) {
        this.interests.remove(tag);
        tag.setProfile(null);
        return this;
    }

    public void setInterests(Set<Tag> tags) {
        this.interests = tags;
    }

    public ZipFlixUser getZipFlixUser() {
        return zipFlixUser;
    }

    public Profile zipFlixUser(ZipFlixUser zipFlixUser) {
        this.zipFlixUser = zipFlixUser;
        return this;
    }

    public void setZipFlixUser(ZipFlixUser zipFlixUser) {
        this.zipFlixUser = zipFlixUser;
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
        Profile profile = (Profile) o;
        if (profile.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), profile.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Profile{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            ", imageURL='" + getImageURL() + "'" +
            "}";
    }
}

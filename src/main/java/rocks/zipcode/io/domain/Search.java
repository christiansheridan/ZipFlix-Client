package rocks.zipcode.io.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Search.
 */
@Entity
@Table(name = "search")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Search implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "search_query")
    private String searchQuery;

    @OneToMany(mappedBy = "search")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Video> videos = new HashSet<>();
    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSearchQuery() {
        return searchQuery;
    }

    public Search searchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
        return this;
    }

    public void setSearchQuery(String searchQuery) {
        this.searchQuery = searchQuery;
    }

    public Set<Video> getVideos() {
        return videos;
    }

    public Search videos(Set<Video> videos) {
        this.videos = videos;
        return this;
    }

    public Search addVideos(Video video) {
        this.videos.add(video);
        video.setSearch(this);
        return this;
    }

    public Search removeVideos(Video video) {
        this.videos.remove(video);
        video.setSearch(null);
        return this;
    }

    public void setVideos(Set<Video> videos) {
        this.videos = videos;
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
        Search search = (Search) o;
        if (search.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), search.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Search{" +
            "id=" + getId() +
            ", searchQuery='" + getSearchQuery() + "'" +
            "}";
    }
}

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
 * A SearchResult.
 */
@Entity
@Table(name = "search_result")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class SearchResult implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "searchResult")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Video> videos = new HashSet<>();
    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<Video> getVideos() {
        return videos;
    }

    public SearchResult videos(Set<Video> videos) {
        this.videos = videos;
        return this;
    }

    public SearchResult addVideos(Video video) {
        this.videos.add(video);
        video.setSearchResult(this);
        return this;
    }

    public SearchResult removeVideos(Video video) {
        this.videos.remove(video);
        video.setSearchResult(null);
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
        SearchResult searchResult = (SearchResult) o;
        if (searchResult.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), searchResult.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "SearchResult{" +
            "id=" + getId() +
            "}";
    }
}

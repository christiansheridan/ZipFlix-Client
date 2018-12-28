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
 * A RecommendedVideos.
 */
@Entity
@Table(name = "recommended_videos")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class RecommendedVideos implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "recommendedVideos")
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

    public RecommendedVideos videos(Set<Video> videos) {
        this.videos = videos;
        return this;
    }

    public RecommendedVideos addVideos(Video video) {
        this.videos.add(video);
        video.setRecommendedVideos(this);
        return this;
    }

    public RecommendedVideos removeVideos(Video video) {
        this.videos.remove(video);
        video.setRecommendedVideos(null);
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
        RecommendedVideos recommendedVideos = (RecommendedVideos) o;
        if (recommendedVideos.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), recommendedVideos.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "RecommendedVideos{" +
            "id=" + getId() +
            "}";
    }
}

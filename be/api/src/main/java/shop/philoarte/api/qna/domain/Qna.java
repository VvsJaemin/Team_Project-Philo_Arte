package shop.philoarte.api.qna.domain;


import lombok.*;
import shop.philoarte.api.artist.domain.Artist;
import shop.philoarte.api.common.domain.BaseEntity;

import javax.persistence.*;

@Getter
@Entity
@Table(name="qnas")
@NoArgsConstructor
@AllArgsConstructor
@ToString(exclude={"artist"})
@Builder
public class Qna extends BaseEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="qna_id")
    private Long qnaId;

    @Column
    private String title;

    @Column
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "artist_id")
    private Artist artist;

    public void changeTitle(String title){
        this.title = title;
    }

    public void changeContent(String content){
        this.content = content;
    }

}
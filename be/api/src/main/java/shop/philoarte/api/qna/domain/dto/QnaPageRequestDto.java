package shop.philoarte.api.qna.domain.dto;

import lombok.*;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;

@ToString
@Component
@Getter
@Setter
@Builder
@AllArgsConstructor
public class QnaPageRequestDto {

    private int page;
    private int size;
    private String type;
    private String keyword;

    public QnaPageRequestDto() {
        this.page = 1;
        this.size = 10;
    }

    public Pageable getPageable(Sort sort) {
        return PageRequest.of(1, size, sort);
    }

}
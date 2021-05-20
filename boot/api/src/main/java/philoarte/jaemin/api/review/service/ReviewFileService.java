package philoarte.jaemin.api.review.service;

import org.springframework.web.multipart.MultipartFile;
import philoarte.jaemin.api.common.util.ModelMapperUtils;
import philoarte.jaemin.api.review.domain.Review;
import philoarte.jaemin.api.review.domain.ReviewFile;
import philoarte.jaemin.api.review.domain.ReviewFileDto;

import java.util.ArrayList;
import java.util.List;

public interface ReviewFileService {
    ArrayList<ReviewFileDto> saveFile(List<MultipartFile> uploadFiles);
    void reviewFileDelete(Long reviewFileId);

    default ReviewFile dtoToEntity(ReviewFileDto reviewFileDto){
        ReviewFile reviewFile = ModelMapperUtils.getModelMapper().map(reviewFileDto, ReviewFile.class);

        return reviewFile;
    }

    default ReviewFileDto entityToDto(ReviewFile reviewFile){
        ReviewFileDto reviewFileDto = ModelMapperUtils.getModelMapper().map(reviewFile, ReviewFileDto.class);

        return reviewFileDto;
    }
}

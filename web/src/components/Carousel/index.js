import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title } from './styles';
import VideoCard from './components/VideoCard';

function VideoCardGroup({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.title;
  const categoryColor = category.color;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
        </>
      )}
      <VideoCardList>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <li key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </li>
          );
        })}
      </VideoCardList>
    </VideoCardGroupContainer>
  );
}

export default VideoCardGroup;

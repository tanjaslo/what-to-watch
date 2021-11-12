import { useRef, useEffect } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying: boolean;
}

function VideoPreview({src, poster, isPlaying}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const currentVideo = videoRef.current;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isPlaying) {
      timer = setTimeout(() => {
        currentVideo?.play();
      }, 1000);
    }

    if (currentVideo !== null && !isPlaying) {
      currentVideo.load();
    }

    return () => clearTimeout(timer);

  }, [currentVideo, isPlaying]);

  return (
    <video
      className="player__video"
      ref={videoRef}
      src={src}
      poster={poster}
      muted
    >
    </video>
  );
}

export default VideoPreview;

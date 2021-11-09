import { Film } from '../../types/film';

type VideoPlayerProps = {
  film: Film;
}

function VideoPlayer({film}: VideoPlayerProps): JSX.Element {
  const {posterImage, videoLink} = film;

  return (
    <video
      src={videoLink}
      className="player__video"
      poster={posterImage}
    >
    </video>
  );
}

export default VideoPlayer;

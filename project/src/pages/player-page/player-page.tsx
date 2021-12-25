import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchFilm } from '../../store/api-actions';
import { getCurrentFilm } from '../../store/films/selectors';

function PlayerPage(): JSX.Element {
  const dispatch = useDispatch();
  const { id }: { id: string } = useParams();

  useEffect(() => {
    dispatch(fetchFilm(id));
  }, [dispatch, id]);

  const currentFilm = useSelector(getCurrentFilm);
  const { previewImage, videoLink } = currentFilm;
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = videoRef.current;

  const [isPlaying, setIsPlaying] = useState(false);

  const onPlayButtonClick = () => {
    if (!isPlaying) {
      video?.play();
      setIsPlaying(true);
    } else {
      video?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="player">
      <video
        className="player__video"
        ref={videoRef}
        src={videoLink}
        poster={previewImage}
      />

      <button type="button" className="player__exit">
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100" />
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonClick}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              {isPlaying ? (
                <use xlinkHref="#pause" />
              ) : (
                <use xlinkHref="#play-s" />
              )}
            </svg>
            <span>{isPlaying ? 'Play' : 'Pause'}</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;

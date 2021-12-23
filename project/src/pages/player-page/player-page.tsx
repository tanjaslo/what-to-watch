import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { getCurrentFilm } from '../../store/films/selectors';
import { ThunkAppDispatch } from '../../types/action';
import { FilmId } from '../../types/film';
import { fetchFilm } from '../../store/api-actions';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  loadFilm: (id: FilmId) => {
    dispatch(fetchFilm(id));
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function PlayerPage({ loadFilm }: PropsFromRedux): JSX.Element {
  const { id }: { id: string } = useParams();

  useEffect(() => {
    loadFilm(id);
  }, [loadFilm, id]);

  const currentFilm = useSelector(getCurrentFilm);
  const { previewImage, videoLink } = currentFilm;

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={previewImage} />

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
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
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

export { PlayerPage };
export default connector(PlayerPage);

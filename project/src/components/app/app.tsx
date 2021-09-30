import MainPage from '../main-page/main-page';

type AppScreenProps = {
  filmsCount: number;
}

function App({filmsCount}: AppScreenProps): JSX.Element {
  return (
    <MainPage filmsCount={filmsCount} />
  );
}

export default App;

import MainPage from '../pages/main-page/main-page';

type AppScreenProps = {
  filmsCount: number;
  title: string;
  genre: string;
  year: number;
}

function App({filmsCount, title, genre, year}: AppScreenProps): JSX.Element {
  return (
    <MainPage
      filmsCount={filmsCount}
      title={title}
      genre={genre}
      year={year}
    />
  );
}

export default App;

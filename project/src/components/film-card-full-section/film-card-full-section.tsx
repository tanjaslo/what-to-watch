type FilmCardFullSectionProps = {
  children: React.ReactNode;
}

function FilmCardFullSection({children}: FilmCardFullSectionProps): JSX.Element {
  return (
    <section className="film-card film-card--full">{children}</section>
  );
}

export default FilmCardFullSection;

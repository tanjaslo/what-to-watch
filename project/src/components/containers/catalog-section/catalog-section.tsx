type CatalogSectionProps = {
  children: React.ReactNode;
}

function CatalogSection({children}: CatalogSectionProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {children}
    </section>
  );
}

export default CatalogSection;

function NotFoundPage() {
  return (
    <div className="page page--404">
      <div className="container">
        <h1 className="page__title">404 - Страница не найдена</h1>
        <p className="page__description">
          К сожалению, такой страницы не существует.
        </p>
        <a href="/" className="page__back-link">
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;

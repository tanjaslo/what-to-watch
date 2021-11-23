import { ActionType,
  ChangeGenreAction } from '../types/action';

export const ChangeGenre = (genre: string): ChangeGenreAction => ({
  type: ActionType.ChangeGenre,
  payload: { genre },
});

//На данном этапе нам потребуется несколько действий:
//изменение жанра и получение списка фильмов в соответствии с выбранным жанром.
//Действие для заполнения списка фильмов должно поместить в хранилище все фильмы.
//Пока используем тестовые данные

import HeaderComponent from "./view/header-component.js";
import TaskFormComponent from "./view/task-form-component.js";
import TaskBoardComponent from "./view/task-board-component.js";
import TaskListComponent from "./view/task-list-component.js";
import TaskItemComponent from "./view/task-item-component.js";
import { RenderPosition, render } from "./framework/render.js";

const bodyContainer = document.querySelector(".board-app");
const addTaskSection = document.querySelector(".add-task");
const taskBoardSection = document.querySelector(".taskboard");

const headerComponent = new HeaderComponent();
render(headerComponent, bodyContainer, RenderPosition.BEFOREBEGIN);

const taskFormComponent = new TaskFormComponent();
render(taskFormComponent, addTaskSection, RenderPosition.BEFOREEND);

const taskBoard = new TaskBoardComponent();
render(taskBoard, taskBoardSection, RenderPosition.BEFOREEND);

const taskListContainer = taskBoard.getElement().querySelector(".task-list");

const titleMapping = {
  Бэклог: "backlog",
  "В процессе": "in-progress",
  Готово: "completed",
  Корзина: "trash",
};

const russianTitles = ["Бэклог", "В процессе", "Готово", "Корзина"];
const taskLists = russianTitles.map((title) => {
  const englishTitle =
    titleMapping[title] || title.toLowerCase().replace(/\s+/g, "-");
  return new TaskListComponent(title, englishTitle);
});

taskLists.forEach((taskList) => {
  render(taskList, taskListContainer, RenderPosition.BEFOREEND);
  const taskUl = taskList.getElement().querySelector("ul");
  const tasks = [
    new TaskItemComponent("Выучить JS"),
    new TaskItemComponent("Выучить React"),
    new TaskItemComponent("Сделать домашку"),
    new TaskItemComponent("Позвонить маме"),
  ];

  tasks.forEach((task) => {
    render(task, taskUl, RenderPosition.BEFOREEND);
  });
});

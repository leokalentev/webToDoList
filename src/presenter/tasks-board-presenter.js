import TaskBoardComponent from "../view/task-board-component.js";
import TaskListComponent from "../view/task-list-component.js";
import TaskItemComponent from "../view/task-item-component.js";
import { render } from "../framework/render.js";
import { tasksModel } from "../model/task-model.js";
import { StatusLabel } from "../const.js";

export default class TasksBoardPresenter {
  constructor({ boardContainer }) {
    this.boardContainer = boardContainer;
    this.tasksModel = tasksModel;
  }

  init() {
    const taskBoardComponent = new TaskBoardComponent();
    render(taskBoardComponent, this.boardContainer);

    const allTasks = this.tasksModel.getTasks();

    const groupedTasks = {};
    allTasks.forEach((task) => {
      if (!groupedTasks[task.status]) {
        groupedTasks[task.status] = [];
      }
      groupedTasks[task.status].push(task);
    });

    Object.entries(groupedTasks).forEach(([status, tasksInStatus]) => {
      const statusName = StatusLabel[status];
      const taskListComponent = new TaskListComponent(statusName, status);
      render(
        taskListComponent,
        taskBoardComponent.getElement().querySelector(".task-list")
      );

      const taskListContainer = taskListComponent
        .getElement()
        .querySelector(".task-list");

      tasksInStatus.forEach((task) => {
        const taskItemComponent = new TaskItemComponent({ task });
        render(taskItemComponent, taskListContainer);
      });
    });
  }
}

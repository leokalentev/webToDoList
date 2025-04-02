import { createElement } from "../framework/render.js";

function createTaskItemComponentTemplate(taskName) {
  return `
    <li class="task-item">${taskName}</li>
  `;
}

export default class TaskItemComponent {
  constructor(taskName) {
    this.taskName = taskName;
  }

  getTemplate() {
    return createTaskItemComponentTemplate(this.taskName);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

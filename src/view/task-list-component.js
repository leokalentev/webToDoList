import { createElement } from "../framework/render.js";

function createTaskListComponentTemplate(title, className) {
  const isTrash = className === "trash";
  return `
    <li class="task-column ${className}">
      <span class="task-title">${title}</span>
      <ul class="task-list"></ul> <!-- Убедитесь, что ul есть -->
      ${isTrash ? `<button class="clear-trash-button">✕ Очистить</button>` : ""}
    </li>
  `;
}

export default class TaskListComponent {
  constructor(title, className) {
    this.title = title;
    this.className = className;
  }

  getTemplate() {
    return createTaskListComponentTemplate(this.title, this.className);
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

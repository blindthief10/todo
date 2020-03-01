import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true
})
export class AppRoot {

  @State() allTasks : string[] = [];

  @Listen('addNewTask')
  createTaskListener(task: CustomEvent): void {
    this.allTasks = [...this.allTasks, task.detail];
  }

  render() {
    return (
      <div>

        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <app-home></app-home>
          <ul>
            {this.allTasks.map(task =>
              <li>{task}</li>
            )}
          </ul>
        </main>

      </div>
    );
  }
}

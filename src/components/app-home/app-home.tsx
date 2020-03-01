import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {

  @State() taskValue = '';
  @Event() addNewTask: EventEmitter;

  handleChangeTask(ev: { currentTarget: { value: string; }; }): void {
    this.taskValue = ev.currentTarget.value;
  }

  createTask(ev: UIEvent): void {
    ev.preventDefault();
    this.addNewTask.emit(this.taskValue);
    this.taskValue = '';
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.createTask.bind(this)}>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Task App</span>
            </div>
            <input  onInput={this.handleChangeTask.bind(this)} type="text" class="form-control" placeholder="Define Task" value={this.taskValue} />
            <button type="submit" class="btn btn-sm btn-info">Create the task</button>
          </div>
        </form>
      </div>
    );
  }
}

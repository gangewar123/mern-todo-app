import React, { Component } from 'react';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            todo_description: '',
            todo_resposible: '',
            todo_priority: '',
            todo_complete: false
        }
    }
    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }
    onChangeTodoResponsible(e) {
        this.setState({
            todo_resposible: e.target.value
        });
    }
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log("form submitted");
        console.log("todo description:", this.state.todo_description);
        console.log("todo responsible", this.state.todo_resposible);
        console.log("todo priority", this.state.todo_priority);
        this.state = {
            todo_description: '',
            todo_resposible: '',
            todo_priority: '',
            todo_complete: false
        }

    }

    render() {
        return (
            <div><h1>
                create New todo
            </h1>
                <form onSubmit={this.onSubmit}>
                    <div className="from-group">
                        <label>Description</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_description}
                            onChange={this.onChangeTodoDescription}
                        />
                    </div>
                    <div className="from-groupp">

                        <label>Responsible</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.todo_resposible}
                            onChange={this.onChangeTodoResponsible}
                        />
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityLow"
                            id="priorityOptions"
                            value="Low"
                            checked={this.state.todo_priority === 'Low'}
                            onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityMedium"
                            id="priorityOptions"
                            value="Medium"
                            checked={this.state.todo_priority === 'Medium'}
                            onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityHigh"
                            id="priorityOptions"
                            value="High"
                            checked={this.state.todo_priority === 'High'}
                            onChange={this.onChangeTodoPriority}
                        />
                        <label className="form-check-label">High</label>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="create todo" className="btn btn-primary"/>

                        </div>
                </form>
            </div>
        );
    }
}
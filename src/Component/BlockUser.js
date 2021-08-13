import React, { Component } from "react";
import StudentService from "../Services/StudentService";

export default class BlockUser extends Component {
    constructor(props) {
        super(props);
        this.onChangeStudentId = this.onChangeStudentId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNickName = this.onChangeNickName.bind(this);
        this.onChangeMarks = this.onChangeMarks.bind(this);
        this.getStudent = this.getStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);

        this.state = {
            currentStudent: {
                id: null,
                studentId: "",
                name: "",
                nickName: "",
                marks: 0
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getStudent(this.props.match.params.id);
    }

    onChangeStudentId(e) {
        const id = e.target.value;

        this.setState(function (prevState) {
            return {
                currentStudent: {
                    ...prevState.currentStudent,
                    id: id
                }
            };
        });
    }
    
    onChangeName(e) {
        const firstName = e.target.value;

        this.setState(function (prevState) {
            return {
                currentStudent: {
                    ...prevState.currentStudent,
                    firstName: firstName
                }
            };
        });
    }

    onChangeNickName(e) {
        const lastName = e.target.value;

        this.setState(function (prevState) {
            return {
                currentStudent: {
                    ...prevState.currentStudent,
                    lastName: lastName
                }
            };
        });
    }
    onChangeMarks(e) {
        const userStatus = e.target.value;

        this.setState(function (prevState) {
            return {
                currentStudent: {
                    ...prevState.currentStudent,
                    userStatus: userStatus
                }
            };
        });
    }

    getStudent(id) {
        StudentService.getStudentById(id)
            .then(response => {
                this.setState({
                    currentStudent: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateStudent() {
        StudentService.updateStudent(
            this.state.currentStudent.id,
            this.state.currentStudent.userStatus            
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The student was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteStudent() {
        StudentService.deleteStudent(this.state.currentStudent.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/students')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentStudent } = this.state;

        return (
            <div>
                {currentStudent ? (
                    <div className="edit-form">
                        <h4>Student</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="studentId">ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="id"
                                    value={currentStudent.id}
                                    onChange={this.onChangeStudentId}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={currentStudent.firstName}
                                    onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="nickName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    value={currentStudent.lastName}
                                    onChange={this.onChangeNickName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="marks">User Status</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userStatus"
                                    value={currentStudent.userStatus}
                                    onChange={this.onChangeMarks}
                                />
                            </div>
                        </form>

                        <button
                            className="badge badge-danger mr-2"
                            onClick={this.deleteStudent} >
                            Delete
                        </button>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateStudent}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Please click on a Student...</p>
                        </div>
                    )}
            </div>
        );
    }
}

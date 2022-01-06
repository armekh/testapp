import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Table, Modal, ModalBody,ModalFooter,ModalHeader, FormGroup, Label, Input } from 'reactstrap';

class Index extends React.Component {

    constructor(){
        super()
        this.state = {
            tasks:[],
            newTaskData:{
                name: "",
                description: ""
            },
            editTaskData:{
                name: "",
                description: ""
            },
            newTaskModal:false,
            editTaskModal:false
        }
    }

    loadTask(){
        axios.get('/tasks').then( (response) => {
            this.setState({
                tasks: response.data
            })
        })
    }

    componentWillMount(){
        this.loadTask()
    }

    toggleNewTaskModal(){
        this.setState({
            newTaskModal: !this.state.newTaskModal
        })
    }

    test(){
        console.log(555)
    }

    toggleEditTaskModal(){
        this.setState({
            editTaskModal: !this.state.editTaskModal
        })
    }

    addTask(){
        axios.post("/tasks", this.state.newTaskData).then((response)=>{
            let {tasks} = this.state;
            this.loadTask();
            this.setState({tasks, newTaskData:false, newTaskData:{
                name:"",
                description:""
            } })
            
        })  
    }

    updateTask(){
        let{ id,name, description} = this.state.editTaskData
        axios.put('/tasks/'+id, {name,description}).then((response)=>{
            this.loadTask()
            this.setState({
                editTaskModal:false,
                editTaskData:{id:"",name:"", description:""}
            })
        })
    }

    editTask(id,name,description){
        this.setState({
            editTaskData:{id,name,description},
            editTaskModal:!this.state.editTaskModal
        })
        this.loadTask()
    }

    deleteTask(id){
        axios.delete('/tasks/'+id).then((response)=>{
            this.loadTask()
        })
    }



    render() {
        let tasks = this.state.tasks.map((task,index)=>{
            return(
                <tr key={task.id}>
                    <td>{index+1}</td>
                    <td>{task.name}</td>
                    <td>{task.description}</td>
                    <td>
                        <Button className="mr-2" size="sm" color="success"
                        onClick={this.editTask.bind(this, task.id, task.name,task.description)}
                        >Edit</Button> {' '}
                        <Button className="mr-2" size="sm" color="danger"
                            onClick={this.deleteTask.bind(this, task.id)}
                        >Delete</Button>
                    </td>
                </tr>
            )
        } )


        return (
            <div className='appContainer'>
                <Button color='primary' block onClick={this.toggleNewTaskModal.bind(this)}>Add Task</Button>
                <p></p>

                <Modal isOpen={this.state.newTaskModal} toggle={this.toggleNewTaskModal.bind(this)} className={this.props.className}>
                    <ModalHeader toggle={this.toggleNewTaskModal.bind(this)}>Add new Task</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name"> Name</Label>
                            <Input id="name" 
                            value={this.state.newTaskData.name}
                            onChange={(e)=>{
                                let {newTaskData} = this.state
                                newTaskData.name = e.target.value
                                this.setState({newTaskData})
                            }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description"> Description</Label>
                            <Input id="description"
                                value={this.state.newTaskData.description}
                                onChange={(e) => {
                                    let {newTaskData} = this.state
                                    newTaskData.description = e.target.value
                                    this.setState({ newTaskData })
                                }}
                            ></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.addTask.bind(this)}>Add Task</Button>
                        <Button color='secondary' onClick={this.toggleNewTaskModal.bind(this)}>Close</Button>  
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.editTaskModal} toggle={this.toggleEditTaskModal.bind(this)} className={this.props.className}>
                    <ModalHeader toggle={this.toggleEditTaskModal.bind(this)}>Edit Task</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name"> Name</Label>
                            <Input id="name"
                                value={this.state.editTaskData.name}
                                onChange={(e) => {
                                    let { editTaskData } = this.state
                                    editTaskData.name = e.target.value
                                    this.setState({ editTaskData })
                                }}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="description"> Description</Label>
                            <Input id="description"
                                value={this.state.editTaskData.description}
                                onChange={(e) => {
                                    let { editTaskData } = this.state
                                    editTaskData.description = e.target.value
                                    this.setState({ editTaskData })
                                }}
                            ></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='primary' onClick={this.updateTask.bind(this)}>Update Task</Button>
                        <Button color='secondary' onClick={this.toggleEditTaskModal.bind(this)}>Close</Button>
                    </ModalFooter>
                </Modal>


                <Table className='table-dark table-hover'>
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Name </th>
                            <th> Description </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks}
                    </tbody>
                </Table>
            </div>
            );
    }
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

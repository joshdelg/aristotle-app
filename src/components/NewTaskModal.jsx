import { useContext, useState } from "react";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select } from "@chakra-ui/react";
import { TaskContext } from "../contexts/TaskContext";
import { v4 as uuidv4 } from 'uuid';

function NewTaskModal(props) {

    const [formData, setFormData] = useState({title: "", priority: 1, dueDate: "", estTime: ""});
    const { dispatch } = useContext(TaskContext);

    const handleAddClick = () => {
        dispatch({type: 'ADD_TASK', task: {id: uuidv4(), ...formData}});
        setFormData({title: "", priority: 1, dueDate: "", estTime: ""})
        props.onClose();
    };

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add New Task</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl my={2} id="title" isRequired>
                        <FormLabel>Task Title</FormLabel>
                        <Input type="text" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}/>
                    </FormControl>

                    <FormControl my={2} id="priority" isRequired>
                        <FormLabel>Priority</FormLabel>
                        <Select placeholder="Select priority" value={formData.priority} onChange={(e) => setFormData({...formData, priority: parseInt(e.target.value)})}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Select>
                    </FormControl>

                    <FormControl my={2} id="dueDate" isRequired>
                        <FormLabel>Due Date</FormLabel>
                        <Input type="text" value={formData.dueDate} onChange={(e) => setFormData({...formData, dueDate: e.target.value})} />
                    </FormControl>

                    <FormControl my={2} id="estTime" isRequired>
                        <FormLabel>Estimated Time</FormLabel>
                        <Input type="text" value={formData.estTime} onChange={(e) => setFormData({...formData, estTime: e.target.value})} />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button mr={4} onClick={handleAddClick}>Add Task</Button>
                    <Button onClick={props.onClose}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default NewTaskModal;
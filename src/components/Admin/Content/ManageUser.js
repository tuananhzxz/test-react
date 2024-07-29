import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc'
import axios from 'axios';
import { toast } from 'react-toastify';
import { postCreateUser } from '../../Service/apiService';
import TableUser from './TableUser';

function ModalBtn(props) {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false)
    setEmail("")
    setPassword("")
    setUsername("")
    setPreviewImage("")  
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('USER');
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(URL.createObjectURL(event.target.files[0]));
      console.log(event.target.files[0]);
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handlePostUser = async () => {
      const isValidEmail = validateEmail(email);
      if(!isValidEmail) {
        toast.error('Invalid email');
        return;
      }
      if(!password) {
        toast.error('Invalid password');
        return;
      }

      let data = await postCreateUser(email, password, username, role, image);
      if (data && data.EC === 0) {
        toast.success(data.EM);
        handleClose();
      }

      if (data && data.EC !== 0) {
        toast.error(data.EM);
      }
  }

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Add new user
      </Button> */}

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
             />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Username</Form.Label>
          <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Role</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(event) => setRole(event.target.value)}>
            <option selected value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group controlId="formGridImage">
            <Form.Label className='label-upload' htmlFor='labelUpload'>
              <FcPlus/>Upload File Image</Form.Label>
            <input type="file" 
            id="labelUpload" hidden
            onChange={(event) => handleUploadImage(event)}
            ></input>
        </Form.Group>
        <Form.Group>
            <div className='col-md-12 img-preview'>
              { previewImage ? 
              <img src={previewImage}/>
              :
              <span>Preview Image</span>
              }
            </div>
        </Form.Group>
      </Row>

    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handlePostUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const ManageUser = (props) => {

  const [showModal, setShowModel] = useState(false);

    return (
        <div className='manage-user-container'>
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary' onClick={(event) => setShowModel(true)}>Add new users</button>
                </div>
                <div>
                    <TableUser />
                </div>
                <ModalBtn show={showModal} setShow={setShowModel}/>
            </div>
        </div>
    )
}

export default ManageUser;
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React,{ useState, useEffect} from 'react'
import { useForm } from '../../hooks/useForm';
 

import api from '../api/api';

import Form  from '../screens/FormDialog';


export const HomeScreen = () => {


  const itask = {
    id: "", 
    name: "", 
    completed: false 
  }
 
  const [status, setStatus] = useState('boot');
  const [items, setItems] = useState(itask);
  const [item, setItem] = useState( null );

  const [isLoading, toggleLoading] = useState(true);

  const [ formValues, handleInputChange, reset ] = useForm({
    taskName: ''
  });

  const [ editFormValues, handleInputChangeEdit, rst ] = useForm({
    taskEdit: ''
  });

  const { taskName } = formValues;

  const { taskEdit } = editFormValues;


  useEffect( () => {
    
     api.then(
       task  => {
        setItems( task );
      }
    );

  }, [])

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const style = {    
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
  const handleToggle = ( id ) => {

    setItems(       
        items => 
        items.map( item => item.id === id 
                ? { ...item, completed: !item.completed } 
                : item 
      )    
    )
  }

  const [editValue, setEditValue] = useState('Sin nombre');

  // ejecuta el boton E
  const handleEdit = ( idProd ) => {
    
    const objEditTask = items.filter( prod => prod.id === idProd )
    // vacia el formEdit
    rst()

    const [ objEdit ] = objEditTask
    setEditValue(objEdit);

    handleOpen();

    
  } 
  // ejecuta button SAVE
  const handleEditSave = (e) => {
    e.preventDefault();

    // no puede estar vacio cambio
    if ( taskEdit.trim() === "" ) return rst();
    
    console.log(taskEdit);
    //busca task por id / edita nombre
    setItems(       
        items => 
        items.map( item => item.id === editValue.id 
                ? {...item, name: taskEdit }
                : item 
      )    
    )
    handleClose();  

  }

  const handleAddTask = (e) => {
    e.preventDefault();

    if ( taskName.trim() === "" ) return reset();

    setItems( [ 
        ...items, 
        {
          id: new Date().getTime(),
          name: taskName,
          completed: false 
        } 
      ] 
    ) 
    reset(); 
  }

  const handleDelete = ( id ) => {
    
    const listTask = items.filter( prod => prod.id !== id )
    console.log('del');
    setItems(listTask);
  }  

  // if ( !items.length) return 'Loading...';

  return (
          <div className='container'>
            <h1>Task List </h1>

            <div className='row'>
              <h4>Add item</h4>
              <div className="row-md-4">
              <form onSubmit={  handleAddTask }>            
                  <input 
                    type="text" 
                    name='taskName'
                    value={ taskName }
                    onChange={ handleInputChange }
                    autoFocus
                  />
                  <button 
                    type='submit'
                    className='btn btn-primary ms-1'
                  >
                      Add
                  </button>
              </form>
                
              </div>         
                
            </div>

            {

              ( !items.length) 
              ?  <p> No tiene tareas</p>
              :
                <div className='row'>
                  <div className="col-lg-12">
                    <ul>
                      {           
                        
                        items.map( task => 
                          (
                            <div className='task'>
                              <li key={task.id}>
                                <i key={task.id}
                                  className={ task.completed ? 'completed disable-select' : 'disable-select' }
                                  onClick= { ()=> handleToggle(task.id) }
                                >                                
                                { task.name }
                                </i> 
                              <i className='actions'>
                                <i 
                                  className="btn btn-danger hover-danger"
                                  onClick={ () => handleDelete(task.id) }
                                  >
                                  X
                                </i> 
                                <i 
                                  className="btn btn-warning hover-info"
                                  onClick={ () => { handleEdit( task.id ) } }
                                  >
                                  e
                                </i> 
                              </i>
                              </li>
                            </div>
                          )
                        )
                      }           
                    </ul>
                  </div>
                </div>           
            }

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Edit name Task</h2>
          <form onSubmit={ handleEditSave }>            
            <input 
              type="text" 
              name='taskEdit'
              value={ taskEdit.length > 0 ? taskEdit : editValue.name }
              // placeholder={ editValue.name }
              onChange={ handleInputChangeEdit }
              
            />
            <button 
              type='submit'
              className='btn btn-primary ms-1'
            >
                Save
            </button>
          </form>
          
        </Box>
      </Modal>      

       </div>
  )
      
}



function getAllUsers () {
  return new Promise((resolve, reject) => {
      setTimeout(resolve(
        
        [        
          { id: new Date().getTime(), 
            name: "Task example", 
            completed: false 
          },              
        ]
      
      ), Math.random() * 3000)
  })
}

export default getAllUsers();

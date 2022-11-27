
export const saveUser = (user) => {
    fetch('https://backend-laptop-mart.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(()=> console.log('user saved'))
  }
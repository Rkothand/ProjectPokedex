async function basiclogin (email, password) {
    const response = await zlFetch.post(loginEndpoint, {
      auth: {
        username: email,
        password: password
      },
      body: { /*...*/ }
    })
  }

  async function basiclogin (email, password) {
    const response = await zlFetch.post(/*...*/)
    const { token } = response.body
    
    localStorage.setItem('token', token)
  }

  async function isLoggedIn () {
    const token = store.get('token')
    if (!token) return false
  }
  
  async function autoRedirect () {
    const validLogin = await isLoggedIn()
    if (!validLogin && location.pathname !== '/login/') redirect('/login')
    if (validLogin && location.pathname === '/login/') redirect('/')
  }


function isLoggedIn () {
    // ...
    const { token, user } = response.body
    localStorage.setItem('user', user)
}

 function logout () {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}
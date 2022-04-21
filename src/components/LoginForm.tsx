import './style.css';
export const Login = () => {

    return (
        <div className='wrapper'>
            <div className='form-wrapper'>
                <h2>Login</h2>
                <form>
                    <div className='username'>
                        <label htmlFor="uname">User Name</label>
                        <input type='text' name='lname'  />
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input type='password' name='password'  />
                    </div>
                    <div className='submit'>
                        <button>Login </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
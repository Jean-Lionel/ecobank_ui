const useUser = () => {

    const disconnectedUser = () => {
        alert('Disconnected');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        alert('User has been disconnected')
        window.location = "/"
    }

    return {
        disconnectedUser
    };
}
 
export default useUser;
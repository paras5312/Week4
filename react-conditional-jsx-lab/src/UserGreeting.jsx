// src/UserGreeting.jsx
// function UserGreeting(props) {
//     const isLoggedIn = props.isLoggedIn;

//     let greetingContent;
//     if (isLoggedIn) {
//         greetingContent = <h1>Welcome back, User!</h1>;
//     } else {
//         greetingContent = <h1>Please log in to continue</h1>;
//     }

//     return (
//         <div>
//             {greetingContent}
//         </div>
//     );
// }

// export default UserGreeting;


// src/UserGreeting.jsx
function UserGreeting(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
        <div>
            {isLoggedIn ? (
                <h1>Welcome back, User!</h1>
            ) : (
                <h1>Please log in to continue123</h1>
            )}
        </div>
    );
}

export default UserGreeting;
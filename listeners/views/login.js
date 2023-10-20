async function login({ ack, body }) {
  await ack({
    response_action: 'clear',
  });
  console.log(body.view.state.values);
  // try {
  //     const loginData = Object.values(body.view.state.values).map((value) => {
  //         username: Object.keys(value)[0],
  //             password: Object.values(value)[1],
  //     })
  // }
}
login();

async function init() {
  try {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();

    console.log(data);
  } catch (err) {
    console.log(`오류 : ${err}`);
  }
}

init();

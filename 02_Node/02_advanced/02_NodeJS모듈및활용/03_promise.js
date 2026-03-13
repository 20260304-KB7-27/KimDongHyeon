//const fs = require('fs').promises; // 파일시스템 중에서 promise에 해당한것만 가져오겠다.
const fs = require('fs/promises');

// fs.readdir('./')
//   .then((files) => {
//     console.log(files);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function readDir() {
  try {
    const files = await fs.readdir('./');
    console.log(files);
  } catch (err) {
    console.error(err);
  }
}

readDir();

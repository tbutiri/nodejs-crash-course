// import fs from 'fs';
import fs from 'fs/promises';

// readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() - Promise.then()
// fs.readFile('./test.txt', 'utf8')
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// readFile() - Async/Await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

// writeFile();
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello world! 2');
        console.log('File written successfully 2');
    } catch (error) {
        console.error(error);
    }
}

// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text 2');
        console.log('File appended successfully 2');
    } catch (error) {
        console.error(error);
    }
}

await readFile(await appendFile(await writeFile()));
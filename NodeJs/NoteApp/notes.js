import fileSystem from 'fs';
const getNotes = (text) => 
{
    fileSystem.appendFileSync('test.txt',text)
    text
}

export { getNotes as default };

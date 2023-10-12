const fs = require('fs');
const path = require('path');
const util = require('util');

const Dir = util.promisify(fs.readdir); //비동기
const Status = util.promisify(fs.stat); //비동기
const PATH = './test';

const search = async directory => {
    const files = await Dir(directory);
    files.forEach(async file => {
        const Path = path.join(directory, file);
        const stat = await Status(Path);
        if (stat.isDirectory()) await search(Path); //폴더면 더 들어감
        else if (path.extname(Path) === '.js') console.log(Path); //js인지 확인 후, 경로를 출력
        }
    ); 
};

(async () => {
    try {
        await search(PATH);
    } catch (err) {
        console.error(err);
    }
})();
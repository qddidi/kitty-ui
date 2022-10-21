import fs from 'fs'
import { componentPath } from './paths'
const stayFile = ['package.json', 'README.md']

const delPath = async (path: string) => {

    let files: string[] = [];

    if (fs.existsSync(path)) {

        files = fs.readdirSync(path);

        files.forEach(async (file) => {

            let curPath = path + "/" + file;

            if (fs.statSync(curPath).isDirectory()) { // recurse

                await delPath(curPath);

            } else { // delete file
                if (!stayFile.includes(file)) {
                    fs.unlinkSync(curPath);
                }


            }

        });

        if (path != `${componentPath}/kitty-ui`) fs.rmdirSync(path);


    }

};
export default delPath
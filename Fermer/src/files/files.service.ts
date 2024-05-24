import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { log } from 'console';
import * as fs from "fs"
import * as path from "path"
import * as uuid from "uuid"


@Injectable()
export class FilesService {
    
    async createFile (file?:any): Promise<string>{
        try {
            if (!file) {
                return null;
            }
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve(__dirname,"..","static");
            if(!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive:true})
            }
            fs.writeFileSync(path.join(filePath,fileName), file.buffer);
            return fileName
        } catch (error) {
            throw new HttpException("faylni yozishda xatolik", HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    async createFiles(files?: any[]): Promise<string[]> {
        try {
            if (!files || files.length === 0) {
                return [];
            }
            
            const fileNames: string[] = [];
    
            for (const file of files) {
                const fileName = uuid.v4() + '.jpg';
                const filePath = path.resolve(__dirname, '..', 'static');
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath, { recursive: true });
                }
                fs.writeFileSync(path.join(filePath, fileName), file.buffer);
                fileNames.push(fileName);
            }
    
            return fileNames;
        } catch (error) {
            throw new HttpException("Faylni yozishda xatolik", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}

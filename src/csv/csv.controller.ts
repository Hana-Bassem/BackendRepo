import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { parse } from 'csv-parse/sync';

@Controller('csv')
export class CsvController {
  @Post('upload')
  //Intercepts the incoming request and extracts the uploaded file,the file should be called 'file'
  @UseInterceptors(FileInterceptor('file'))
  //@UploadedFile --> grabs the uploaded file and make it available as a variable  called file
  async uploadCsv(@UploadedFile() file: Express.Multer.File) {
    //buufer :content
    const csvString = file.buffer.toString('utf-8');
    const records = parse(csvString, {
        //first row as key
      columns: true, 
      skip_empty_lines: true,
      //avoid errors when columns are missing or extra
      //relax_column_count: true,
    });
    return { data: records };
  }
}
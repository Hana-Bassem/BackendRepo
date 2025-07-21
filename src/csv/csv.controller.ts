import { Controller, Post, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { parse } from 'csv-parse/sync';

@Controller('csv')
export class CsvController {
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCsv(@UploadedFile() file: Express.Multer.File) {
    const csvString = file.buffer.toString('utf-8');

    const records = parse(csvString, {
      columns: true,
      skip_empty_lines: true,
    });
    return { data: records };
  }
}

import { Injectable } from '@nestjs/common';
import { Controller, Get, Post, Res, Req, HttpStatus } from '@nestjs/common';

const {createRandomData} = require('../../data/data');

@Injectable()
export class AppService {
  getData() {
    return createRandomData('nestjs')
  }
}

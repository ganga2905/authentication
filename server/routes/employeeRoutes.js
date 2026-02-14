import express from 'express'
import{create}from '../controller/employeeController.js'

const route=express.Router();

route.post('/user',create);

export default route
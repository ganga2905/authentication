import express from 'express'
import{create,createVarify}from '../controller/employeeController.js'

const route=express.Router();

route.post('/register',create);
route.post('/login',createVarify)

export default route
import express from 'express';
const router=express.Router();
import user from '../controller/user.controller.js';
import category from '../controller/category.controller.js';
import project from '../controller/project.controller.js';

//create user
router.post('/create',user.insert_data);

//show user
router.post('/fetch_user',user.fetch_user);

//update user
router.put('/update_user',user.update_user);

//delete user
router.get('/delete_user/:id',user.delete_user);

router.post('/add_category',category.add_category);

router.post('/add_project',project.add_project);

router.get('/show_project',project.show_projects);

export default router

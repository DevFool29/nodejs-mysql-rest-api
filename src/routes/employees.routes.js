import { Router } from 'express'
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
} from '../controllers/employees.controller.js'

const router = Router()

// GET employees
router.get('/employees', getEmployees)

//GET a singular Employee
router.get('/employees/:id', getEmployee)

// POST employees
router.post('/employees', createEmployee)

// PUT employees
router.put('/employees/:id', updateEmployee)

// DELETE employees
router.delete('/employees/:id', deleteEmployee)

export default router

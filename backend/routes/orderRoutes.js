import express from 'express'
import { addOrderItems, getOrderById, updateOrderToPaid } from '../Controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

//@dec     Create a new Order
//@route   POST /api/orders/
//access   private
router.route('/').post(protect, addOrderItems) 

//@dec     getting an order by Id
//@route   GET /api/orders/:id
//access   private
router.route('/:id').get(protect, getOrderById)

//@dec     updating an order by Id
//@route   PUT /api/orders/:id/pay
//access   private
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router
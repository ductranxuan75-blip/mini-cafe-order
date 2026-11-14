const { createOrder } = require('./order_service');

// Hàm cập nhật trạng thái pha chế đồ uống
/**
 * Update brew status for an order.
 * @param {Object} order - Order object
 * @param {string} newStatus - New status ("in_progress", "done", "cancelled")
 * @throws {Error} Throws 400 error if trying to cancel in_progress order.
 */
function updateBrewStatus(order, newStatus) {
  if (order.status === 'in_progress' && newStatus === 'cancelled') {
    const err = new Error('Không thể huỷ đơn khi đang pha');
    err.code = 400;
    throw err;
  }
  order.status = newStatus;
  // Có thể ghi log hoặc cập nhật DB tại đây nếu cần
  return order;
}

module.exports = {
  createOrder,
  updateBrewStatus,
};

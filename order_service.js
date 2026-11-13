// order_service.js

// Menu
const MENU = [
  { id: 1, name: "Cafe đen", price: 35000 },
  { id: 2, name: "Nâu lắc", price: 40000 },
  { id: 3, name: "Bạc xỉu", price: 37000 }
];

/**
 * Tạo đơn hàng mới
 * @param {number} itemId - id món từ MENU
 * @param {number} sugar - tỷ lệ đường (0-100)
 * @param {number} ice - tỷ lệ đá (0-100)
 * @returns {object} Đơn hàng (hoặc lỗi nếu không hợp lệ)
 */
function createOrder(itemId, sugar, ice) {
  const item = MENU.find(m => m.id === itemId);
  if (!item) {
    return { error: "Món không tồn tại" };
  }
  if (sugar < 0 || sugar > 100 || ice < 0 || ice > 100) {
    return { error: "Tỷ lệ đường/đá phải từ 0 đến 100%" };
  }
  // Đơn hàng dạng số nguyên VNĐ
  return {
    itemId: item.id,
    itemName: item.name,
    sugar,
    ice,
    price: item.price,
    orderedAt: new Date().toISOString()
  };
}

// Export
module.exports = {
  MENU,
  createOrder
};

import Order from "../models/order";

class OrderService {
  static async getAll() {
    try {
      return await Order.find();
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const Order = await Order.findById(id);
      return Order;
    } catch (error) {
      throw error;
    }
  }

  static async addOrder(data) {
    try {
      const Order = new Order(data);
      return await Order.save();
    } catch (error) {
      throw error;
    }
  }

  static async update(id, data) {
    try {
      const Order = await Order.findById({ _id: id }).exec();
      Order.set(data);
      const result = await Order.save();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      return await Order.deleteOne(id);
    } catch (error) {
      throw error;
    }
  }
}

export default new OrderService;

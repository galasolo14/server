import express, {Request, Response} from 'express';

const shoppingData = require('../data/shopping');

const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categoriesList = await shoppingData.getCategories();
        res.send(categoriesList)
    } catch (error: any) {
        res.status(400).send(error.massage);
    }
}

const addOrderList = async (req: Request, res: Response) => {
    try {
        const orderList = await shoppingData.addOrder(req.body);
        res.json(orderList)
    } catch (error: any) {
        res.status(400).send(error.massage);
    }
}

module.exports = {
    getAllCategories,
    addOrderList
}
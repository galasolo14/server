const utils = require('./../utils');
const config = require('../../config');
const sql = require('mssql');

const getCategories = async () => {
    try{
        const pool = await sql.connect(config.sql);
        const categoriesList = await pool.request().query('select * from categories_tbl');
        return categoriesList.recordsets[0];
    } catch (error: any) {
        throw(error)
    }
}

const addOrder = async (items:any) => {
    try{
        const pool = await sql.connect(config.sql);
        let currentOrderId = utils.getOrderId();

        let added:any = 0
        for(let i=0; i<items.length; i++){
            let addOrderList = await pool.request().query(`insert into save_orders_tbl values (${currentOrderId}, '${items[i].product}', ${items[i].category}, ${items[i].quantity})`);
            if(addOrderList.rowsAffected[0] === 1){
                added ++
            } 
        }
        if(added > 0){
            utils.addOne();
        }
        return ` זמנתך עבור ${added}  פריטים נשמרה בהצלחה`;
    } catch (error: any) {
        throw(error)
    }
}

module.exports = {
    getCategories,
    addOrder
}

